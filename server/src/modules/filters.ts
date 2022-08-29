import { Request } from 'express';
import { Record, String, Array as RuneArray, Union, Literal } from 'runtypes';
import {
  Op,
  FindOptions,
  Attributes,
  IncludeOptions,
  WhereOptions,
} from 'sequelize';

import { Database, Source, ProgramModel } from '../models';
import { isNumberString } from '../utils';

import { BadRequestError } from './error';

interface IPaginationFilter {
  limit: number;
  offset: number;
}
const PaginationOptions = Record({
  page: String.withConstraint(isNumberString).optional(),
  items_on_page: String.withConstraint(isNumberString).optional(),
});

function getPaginationFilter({ query }: Request): IPaginationFilter | null {
  try {
    const { page, items_on_page } = PaginationOptions.check(query);

    if (page == null && items_on_page == null) return null;
    if ((page == null) != (items_on_page == null)) {
      throw new BadRequestError('Неверно заданы параметры пагинации.');
    }

    return {
      limit: Number(items_on_page),
      offset: Number(items_on_page) * (Number(page) - 1),
    };
  } catch (err) {
    throw new BadRequestError('Неверно заданы параметры пагинации.');
  }
}

const SearchInOptions = Union(
  Literal('name'),
  Literal('description'),
  Literal('proprietary_counterparts')
);

type ProgramSearchOptions = FindOptions<Attributes<ProgramModel>>;

const SearchProgramQuery = Record({
  q: String,
  _in: Union(RuneArray(SearchInOptions), SearchInOptions).optional(),
  operation_system_id: String.withConstraint(isNumberString).optional(),
  program_type_id: String.withConstraint(isNumberString).optional(),
});

function getProgramSearchOption(req: Request): ProgramSearchOptions {
  const query = SearchProgramQuery.check(req.query);
  const operationSystemId =
    query.operation_system_id != null
      ? Number(query.operation_system_id)
      : null;
  const programTypeId =
    query.program_type_id != null ? Number(query.program_type_id) : null;

  const whereOrOptions: WhereOptions = [];
  const whereAndOptions: WhereOptions = [];
  const includeOptions: IncludeOptions[] = [
    {
      model: Source,
      as: 'sources',
      attributes: ['distrib_url', 'operation_system_id'],
      separate: true,
    },
  ];

  if (operationSystemId != null) {
    includeOptions.push({
      model: Source,
      as: 'filter',
      where: { operation_system_id: operationSystemId },
      required: true,
      attributes: [],
    });
  }

  if (programTypeId != null) {
    whereAndOptions.push({
      program_type_id: programTypeId,
    });
  }

  if (query._in == null) {
    whereOrOptions.push({
      name: { [Op.like]: `%${query.q}%` },
    });
  } else if (Array.isArray(query._in)) {
    query._in.forEach((key) => {
      if (key === 'proprietary_counterparts') {
        whereOrOptions.push(
          Database.where(Database.col(key), Op.like, `%${query.q}%`)
        );
      } else {
        whereOrOptions.push({
          [key]: { [Op.like]: `%${query.q}%` },
        });
      }
    });
  } else {
    whereOrOptions.push({
      [query._in]: { [Op.like]: `%${query.q}%` },
    });
  }

  return {
    order: ['id'],
    include: includeOptions,
    where: {
      [Op.or]: [...whereOrOptions],
      [Op.and]: [...whereAndOptions],
    },
  };
}

export {
  IPaginationFilter,
  ProgramSearchOptions,
  getPaginationFilter,
  getProgramSearchOption,
};

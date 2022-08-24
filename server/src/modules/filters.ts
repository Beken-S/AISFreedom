import { Request } from 'express';
import { Record, String, Array as RuneArray, Union } from 'runtypes';
import { Op, FindOptions, Attributes } from 'sequelize';

import { Database, Source, ProgramModel } from '../models';

import { BadRequestError } from './error';

interface IPaginationFilter {
  limit: number;
  offset: number;
}

function getPaginationFilter({ query }: Request): IPaginationFilter | null {
  let page: number | null = null;
  let itemsOnPage: number | null = null;

  for (const key in query) {
    if (key === 'page') page = Number(query[key]);
    if (key === 'items_on_page') itemsOnPage = Number(query[key]);
  }

  if (page == null && itemsOnPage == null) return null;

  if (
    page == null ||
    itemsOnPage == null ||
    isNaN(page) ||
    isNaN(itemsOnPage)
  ) {
    throw new BadRequestError('Неверно заданы параметры пагинации.');
  }

  return {
    limit: itemsOnPage,
    offset: itemsOnPage * (page - 1),
  };
}

type SearchInOptions = 'name' | 'description' | 'counterparts';

function isSearchInOptions(
  value: unknown
): value is SearchInOptions | SearchInOptions[] {
  if (Array.isArray(value)) {
    const uniqueArray = [...new Set(value)];

    if (value.length > uniqueArray.length) return false;

    for (const item of value) {
      if (
        item !== 'name' &&
        item !== 'description' &&
        item !== 'proprietary_counterparts'
      ) {
        return false;
      }
    }
    return true;
  } else {
    return (
      value == 'name' ||
      value == 'description' ||
      value == 'proprietary_counterparts'
    );
  }
}

type WhereOption = {
  key: string;
  value: string | number;
};

type ProgramSearchOptions = FindOptions<Attributes<ProgramModel>>;

const SearchProgramQuery = Record({
  q: String,
  _in: Union(RuneArray(String), String).optional(),
  operation_system_id: String.optional(),
  program_type_id: String.optional(),
});

function getProgramSearchOption(req: Request): ProgramSearchOptions {
  const query = SearchProgramQuery.check(req.query);
  const operationSystemId =
    query.operation_system_id != null
      ? Number(query.operation_system_id)
      : null;
  const programTypeId =
    query.program_type_id != null ? Number(query.program_type_id) : null;

  if (
    (query._in != null && !isSearchInOptions(query._in)) ||
    (operationSystemId != null && isNaN(operationSystemId)) ||
    (programTypeId != null && isNaN(programTypeId))
  ) {
    throw new BadRequestError('Неверные параметры поиска.');
  }

  const whereOrOptions: WhereOption[] = [];
  const whereAndOptions: WhereOption[] = [];
  const includeWhereOptions: WhereOption[] = [];

  if (operationSystemId != null) {
    includeWhereOptions.push({
      key: 'operation_system_id',
      value: operationSystemId,
    });
  }

  if (programTypeId != null) {
    whereAndOptions.push({
      key: 'program_type_id',
      value: programTypeId,
    });
  }

  if (query._in != null) {
    if (Array.isArray(query._in)) {
      query._in.forEach((key) => whereOrOptions.push({ key, value: query.q }));
    } else {
      whereOrOptions.push({ key: query._in, value: query.q });
    }
  } else {
    whereOrOptions.push({ key: 'name', value: query.q });
  }

  return {
    order: ['id'],
    include:
      includeWhereOptions.length > 0
        ? {
            model: Source,
            where: {
              [Op.or]: includeWhereOptions.map(({ key, value }) => ({
                [key]: value,
              })),
            },
            attributes: [],
          }
        : undefined,
    where: {
      [Op.or]:
        whereOrOptions.length > 0
          ? whereOrOptions.map(({ key, value }) => {
              switch (key) {
                case 'proprietary_counterparts': {
                  return Database.where(
                    Database.col(key),
                    Op.like,
                    `%${value}%`
                  );
                }
                default: {
                  return { [key]: { [Op.like]: `%${value}%` } };
                }
              }
            })
          : [],
      [Op.and]:
        whereAndOptions.length > 0
          ? whereAndOptions.map(({ key, value }) => {
              return { [key]: value };
            })
          : [],
    },
  };
}

export {
  IPaginationFilter,
  ProgramSearchOptions,
  getPaginationFilter,
  getProgramSearchOption,
};

import {
  Program,
  ProgramAttributes,
  ProgramCreationAttributes,
  ProgramModel,
} from '../models';
import { BadRequestError } from '../modules/error';
import { IPaginationFilter, ProgramSearchOptions } from '../modules/filters';
import { PaginateOutput } from '../types';
import { getPageCount } from '../utils';

async function create(
  attributes: ProgramCreationAttributes
): Promise<ProgramModel> {
  return Program.create(attributes);
}

async function getAll(
  filter?: IPaginationFilter
): Promise<ProgramModel[] | PaginateOutput<ProgramModel>> {
  if (filter != null) {
    const programs = await Program.findAndCountAll({
      order: ['id'],
      ...filter,
    });

    return {
      items: programs.rows,
      page_count: getPageCount(filter.limit, programs.count),
    };
  }
  return Program.findAll({ order: ['id'] });
}

async function getById(id: number): Promise<ProgramModel | void> {
  const program = await Program.findByPk(id);

  if (program == null) {
    throw new BadRequestError('Запись не найдена.');
  }

  return program;
}

async function search(
  options: ProgramSearchOptions,
  filter?: IPaginationFilter
): Promise<ProgramModel[] | PaginateOutput<ProgramModel>> {
  if (filter != null) {
    const programs = await Program.findAndCountAll({
      ...options,
      ...filter,
    });

    return {
      items: programs.rows,
      page_count: getPageCount(filter.limit, programs.count),
    };
  }

  return Program.findAll(options);
}

async function update(attributes: ProgramAttributes): Promise<ProgramModel> {
  const program = await Program.findOne({ where: { id: attributes.id } });

  if (program == null) {
    throw new BadRequestError('Запись не найдена.');
  }

  program.set(attributes);

  return program.save();
}

async function destroy(id: number): Promise<boolean> {
  const count = await Program.destroy({ where: { id } });

  if (count === 0) {
    throw new BadRequestError('Запись не найдена.');
  }

  return true;
}

export { create, getAll, getById, update, destroy, search };

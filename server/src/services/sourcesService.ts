import {
  Source,
  SourceAttributes,
  SourceCreationAttributes,
  SourceModel,
} from '../models';
import { BadRequestError } from '../modules/error';

async function create(
  attributes: SourceCreationAttributes
): Promise<SourceModel> {
  return Source.create(attributes);
}

async function getAll(): Promise<SourceModel[]> {
  return Source.findAll({ order: ['id'] });
}

async function getById(id: number): Promise<SourceModel> {
  const source = await Source.findByPk(id);

  if (source == null) {
    throw new BadRequestError('Запись не найдена.');
  }

  return source;
}

async function update(attributes: SourceAttributes): Promise<SourceModel> {
  const source = await Source.findOne({ where: { id: attributes.id } });

  if (source == null) {
    throw new BadRequestError('Запись не найдена.');
  }

  source.set(attributes);

  return source.save();
}

async function destroy(id: number): Promise<boolean> {
  const count = await Source.destroy({ where: { id } });

  if (count === 0) {
    throw new BadRequestError('Запись не найдена.');
  }

  return true;
}

export { create, getAll, getById, update, destroy };

import { Source, SourceCreationAttributes } from '../models';
import { NotFoundError } from '../modules/error';

async function create(attributes: SourceCreationAttributes): Promise<Source> {
  return Source.create(attributes);
}

async function getAll(): Promise<Source[]> {
  return Source.scope('orderById').findAll();
}

async function getById(id: number): Promise<Source> {
  const source = await Source.findByPk(id);

  if (source == null) {
    throw new NotFoundError(`Источник с id=${id} не найден.`);
  }

  return source;
}

async function update(
  id: number,
  attributes: SourceCreationAttributes
): Promise<Source> {
  const source = await getById(id);

  source.set(attributes);

  return source.save();
}

async function destroy(id: number): Promise<void> {
  const source = await getById(id);

  return source.destroy();
}

export { create, getAll, getById, update, destroy };

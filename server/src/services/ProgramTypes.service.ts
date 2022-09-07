import { ProgramType, ProgramTypeCreationAttributes } from '../models';
import { NotFoundError } from '../modules/error';

async function create(
  attributes: ProgramTypeCreationAttributes
): Promise<ProgramType> {
  return ProgramType.create(attributes);
}

async function getAll(): Promise<ProgramType[]> {
  return ProgramType.scope('orderById').findAll();
}

async function getById(id: number): Promise<ProgramType> {
  const programType = await ProgramType.findByPk(id);

  if (programType == null) {
    throw new NotFoundError(`Класс программы с id=${id} не найден.`);
  }

  return programType;
}

async function update(
  id: number,
  attributes: ProgramTypeCreationAttributes
): Promise<ProgramType> {
  const programType = await getById(id);

  programType.set(attributes);

  return programType.save();
}

async function destroy(id: number): Promise<void> {
  const programType = await getById(id);

  return programType.destroy();
}

export { create, getAll, getById, update, destroy };

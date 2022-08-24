import {
  ProgramType,
  ProgramTypeAttributes,
  ProgramTypeCreationAttributes,
  ProgramTypeModel,
} from '../models';
import { BadRequestError } from '../modules/error';

async function create(
  attributes: ProgramTypeCreationAttributes
): Promise<ProgramTypeModel> {
  return ProgramType.create(attributes);
}

async function getAll(): Promise<ProgramTypeModel[]> {
  return ProgramType.findAll({ order: ['id'] });
}

async function getById(id: number): Promise<ProgramTypeModel | void> {
  const programType = await ProgramType.findByPk(id);

  if (programType == null) {
    throw new BadRequestError('Запись не найдена.');
  }

  return programType;
}

async function update(
  attributes: ProgramTypeAttributes
): Promise<ProgramTypeModel> {
  const programType = await ProgramType.findOne({
    where: { id: attributes.id },
  });

  if (programType == null) {
    throw new BadRequestError('Запись не найдена.');
  }

  programType.set(attributes);

  return programType.save();
}

async function destroy(id: number): Promise<boolean> {
  const count = await ProgramType.destroy({ where: { id } });

  if (count === 0) {
    throw new BadRequestError('Запись не найдена.');
  }

  return true;
}

export { create, getAll, getById, update, destroy };

import {
  OperationSystem,
  OperationSystemAttributes,
  OperationSystemCreationAttributes,
} from '../models';
import { NotFoundError } from '../modules/error';

async function create(
  attributes: OperationSystemCreationAttributes
): Promise<OperationSystem> {
  return OperationSystem.create(attributes);
}

async function getAll(): Promise<OperationSystem[]> {
  return OperationSystem.scope('orderById').findAll();
}

async function getById(id: number): Promise<OperationSystem> {
  const operationSystem = await OperationSystem.findByPk(id);

  if (operationSystem == null) {
    throw new NotFoundError(`Операционная система с id=${id} не найдена.`);
  }

  return operationSystem;
}

async function update(
  id: number,
  attributes: OperationSystemAttributes
): Promise<OperationSystem> {
  const program = await getById(id);

  program.set(attributes);

  return program.save();
}

async function destroy(id: number): Promise<void> {
  const operationSystem = await getById(id);

  return operationSystem.destroy();
}

export { create, getAll, getById, update, destroy };

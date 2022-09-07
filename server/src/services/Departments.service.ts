import { Department, DepartmentCreationAttributes } from '../models';
import { NotFoundError } from '../modules/error';

async function create(
  attributes: DepartmentCreationAttributes
): Promise<Department> {
  return Department.create(attributes);
}

async function getAll(): Promise<Department[]> {
  return Department.scope('orderById').findAll();
}

async function getById(id: number): Promise<Department> {
  const department = await Department.findByPk(id);

  if (department == null) {
    throw new NotFoundError(`Подразделение с id=${id} не найдено.`);
  }

  return department;
}

async function update(
  id: number,
  attributes: DepartmentCreationAttributes
): Promise<Department> {
  const department = await getById(id);

  department.set(attributes);

  return department.save();
}

async function destroy(id: number): Promise<void> {
  const department = await getById(id);

  return department.destroy();
}

export { create, getAll, getById, update, destroy };

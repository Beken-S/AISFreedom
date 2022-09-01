// import {
//   OperationSystem,
//   OperationSystemAttributes,
//   OperationSystemCreationAttributes,
//   OperationSystemModel,
// } from '../models';
// import { BadRequestError } from '../modules/error';

// async function create({
//   name,
// }: OperationSystemCreationAttributes): Promise<OperationSystemModel> {
//   return OperationSystem.create({ name });
// }

// async function getAll(): Promise<OperationSystemModel[]> {
//   return OperationSystem.findAll({ order: ['id'] });
// }

// async function getById(id: number): Promise<OperationSystemModel | void> {
//   const operationSystem = await OperationSystem.findByPk(id);

//   if (operationSystem == null) {
//     throw new BadRequestError('Запись не найдена.');
//   }

//   return operationSystem;
// }

// async function update(
//   attributes: OperationSystemAttributes
// ): Promise<OperationSystemModel> {
//   const program = await OperationSystem.findOne({
//     where: { id: attributes.id },
//   });

//   if (program == null) {
//     throw new BadRequestError('Запись не найдена.');
//   }

//   program.set(attributes);

//   return program.save();
// }

// async function destroy(id: number): Promise<boolean> {
//   const count = await OperationSystem.destroy({ where: { id } });

//   if (count === 0) {
//     throw new BadRequestError('Запись не найдена.');
//   }

//   return true;
// }

// export { create, getAll, getById, update, destroy };

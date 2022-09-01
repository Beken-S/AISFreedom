// import { Request, Response, NextFunction } from 'express';

// import {
//   OperationSystemAttributes,
//   OperationSystemCreationAttributes,
// } from '../models';
// import { operationSystemsService } from '../services';
// import { getId } from '../utils';

// async function create(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> {
//   try {
//     const attributes = OperationSystemCreationAttributes.check(req.body);
//     const createdOperationSystem = await operationSystemsService.create(
//       attributes
//     );

//     res.json(createdOperationSystem);
//   } catch (err) {
//     next(err);
//   }
// }

// async function getAll(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> {
//   try {
//     const operationSystems = await operationSystemsService.getAll();

//     res.json(operationSystems);
//   } catch (err) {
//     next(err);
//   }
// }

// async function getById(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> {
//   try {
//     const id = getId(req);
//     const operationSystem = await operationSystemsService.getById(id);

//     res.json(operationSystem);
//   } catch (err) {
//     next(err);
//   }
// }

// async function update(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> {
//   try {
//     const attributes = OperationSystemAttributes.check(req.body);
//     const modifiedOperationSystem = await operationSystemsService.update(
//       attributes
//     );

//     res.json(modifiedOperationSystem);
//   } catch (err) {
//     next(err);
//   }
// }

// async function destroy(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> {
//   try {
//     const id = getId(req);
//     const isDeleted = await operationSystemsService.destroy(id);

//     if (isDeleted) {
//       res.json({
//         message: 'Запись была успешно уделена.',
//       });
//     }
//   } catch (err) {
//     next(err);
//   }
// }

// export { create, getAll, getById, update, destroy };

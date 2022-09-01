// import { Request, Response, NextFunction } from 'express';

// import { LicenseAttributes, LicenseCreationAttributes } from '../models';
// import { licensesService } from '../services';
// import { getId } from '../utils';

// async function create(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> {
//   try {
//     const attributes = LicenseCreationAttributes.check(req.body);
//     const createdLicense = await licensesService.create(attributes);

//     res.json(createdLicense);
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
//     const licenses = await licensesService.getAll();

//     res.json(licenses);
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
//     const license = await licensesService.getById(id);

//     res.json(license);
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
//     const attributes = LicenseAttributes.check(req.body);
//     const modifiedLicense = await licensesService.update(attributes);

//     res.json(modifiedLicense);
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
//     const isDeleted = await licensesService.destroy(id);

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

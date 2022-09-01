import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

import config from '../config';
// import { ProgramAttributes, ProgramCreationAttributes } from '../models';
import { BadRequestError } from '../modules/error';
// import {
//   getPaginationFilter,
//   getProgramSearchOption,
// } from '../modules/filters';
// import { programsService, imagesService } from '../services';
// import { getId } from '../utils';

// async function create(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> {
//   try {
//     const attributes = ProgramCreationAttributes.check(req.body);
//     const createdProgram = await programsService.create(attributes);

//     res.json(createdProgram);
//   } catch (err) {
//     next(err);
//   }
// }

async function getAll(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const errors = validationResult(req);
    // const filter = getPaginationFilter(req);
    // const programs =
    //   filter != null
    //     ? await programsService.getAll(filter)
    //     : await programsService.getAll();
    errors.throw();
    res.json('');
  } catch (err) {
    next(err);
  }
}

// async function getById(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> {
//   try {
//     const id = getId(req);
//     const program = await programsService.getById(id);

//     res.json(program);
//   } catch (err) {
//     next(err);
//   }
// }

// async function search(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> {
//   try {
//     const options = getProgramSearchOption(req);
//     const filter = getPaginationFilter(req);
//     const programs =
//       filter != null
//         ? await programsService.search(options, filter)
//         : await programsService.search(options);

//     res.json(programs);
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
//     const attributes = ProgramAttributes.check(req.body);
//     const modifiedPrograms = await programsService.update(attributes);

//     res.json(modifiedPrograms);
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
//     const isDeleted = await programsService.destroy(id);

//     if (isDeleted) {
//       res.json({
//         message: 'Запись была успешно уделена.',
//       });
//     }
//   } catch (err) {
//     next(err);
//   }
// }

// async function saveImages(req: Request, res: Response, next: NextFunction) {
//   try {
//     if (req.files == null || req.files['images'] == null) {
//       throw new BadRequestError('Неверное тело запроса.');
//     }

//     const imagesNames = await imagesService.save(
//       config.database.filesPath.temp,
//       req.files['images']
//     );

//     res.json(imagesNames);
//   } catch (err) {
//     next(err);
//   }
// }

// export { create, getAll, getById, update, destroy, search, saveImages };

export { getAll };

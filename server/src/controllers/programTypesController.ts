import { Request, Response, NextFunction } from 'express';

import {
  ProgramTypeAttributes,
  ProgramTypeCreationAttributes,
} from '../models';
import { programTypesService } from '../services';
import { getId } from '../utils';

async function create(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const attributes = ProgramTypeCreationAttributes.check(req.body);
    const createdProgramType = await programTypesService.create(attributes);

    res.json(createdProgramType);
  } catch (err) {
    next(err);
  }
}

async function getAll(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const programTypes = await programTypesService.getAll();

    res.json(programTypes);
  } catch (err) {
    next(err);
  }
}

async function getById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id = getId(req);
    const programType = await programTypesService.getById(id);

    res.json(programType);
  } catch (err) {
    next(err);
  }
}

async function update(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const attributes = ProgramTypeAttributes.check(req.body);
    const modifiedLicense = await programTypesService.update(attributes);

    res.json(modifiedLicense);
  } catch (err) {
    next(err);
  }
}

async function destroy(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id = getId(req);
    const isDeleted = await programTypesService.destroy(id);

    if (isDeleted) {
      res.json({
        message: 'Запись была успешно уделена.',
      });
    }
  } catch (err) {
    next(err);
  }
}

export { create, getAll, getById, update, destroy };

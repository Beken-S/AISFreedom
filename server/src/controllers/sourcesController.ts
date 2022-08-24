import { Request, Response, NextFunction } from 'express';

import { SourceAttributes, SourceCreationAttributes } from '../models';
import { sourcesService } from '../services';
import { getId } from '../utils';

async function create(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const attributes = SourceCreationAttributes.check(req.body);
    const createdSource = await sourcesService.create(attributes);

    res.json(createdSource);
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
    const source = await sourcesService.getAll();

    res.json(source);
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
    const source = await sourcesService.getById(id);

    res.json(source);
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
    const attributes = SourceAttributes.check(req.body);
    const modifiedSource = await sourcesService.update(attributes);

    res.json(modifiedSource);
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
    const isDeleted = await sourcesService.destroy(id);

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

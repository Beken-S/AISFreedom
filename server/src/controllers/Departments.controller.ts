import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

import { UnprocessableEntityError } from '../modules/error';
import { departmentsService } from '../services';
import { IdParam } from '../types';

async function create(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new UnprocessableEntityError(
        'Неверные значения в теле запроса.',
        errors.array()
      );
    }

    const createdDepartment = await departmentsService.create(req.body);

    res.json(createdDepartment);
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
    const department = await departmentsService.getAll();

    res.json(department);
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
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new UnprocessableEntityError('Неверные параметры.', errors.array());
    }

    const { id } = req.params as unknown as IdParam;
    const department = await departmentsService.getById(id);

    res.json(department);
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
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new UnprocessableEntityError(
        'Неверные параметры или значения в теле запроса.',
        errors.array()
      );
    }

    const { id } = req.params as unknown as IdParam;
    const modifiedDepartment = await departmentsService.update(id, req.body);

    res.json(modifiedDepartment);
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
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new UnprocessableEntityError('Неверные параметры.', errors.array());
    }

    const { id } = req.params as unknown as IdParam;

    await departmentsService.destroy(id);

    res.json({
      message: `Подразделение с id=${id} был успешно уделено.`,
    });
  } catch (err) {
    next(err);
  }
}

export { create, getAll, getById, update, destroy };

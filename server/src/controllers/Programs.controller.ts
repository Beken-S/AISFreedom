import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

import config from '../config';
import { UnprocessableEntityError } from '../modules/error';
import { programsService, imagesService } from '../services';
import {
  ProgramSearchOptions,
  PaginationParams,
  ProgramImages,
  IdParam,
} from '../types';

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

    const createdProgram = await programsService.create(req.body);

    res.json(createdProgram);
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
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new UnprocessableEntityError('Неверные параметры.', errors.array());
    }

    const programs = await programsService.getAll(
      req.query as unknown as PaginationParams
    );

    res.json(programs);
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
    const program = await programsService.getById(id);

    res.json(program);
  } catch (err) {
    next(err);
  }
}

async function search(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new UnprocessableEntityError('Неверные параметры.', errors.array());
    }

    const programs = await programsService.search(
      req.query as unknown as ProgramSearchOptions
    );

    res.json(programs);
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
    const modifiedPrograms = await programsService.update(id, req.body);

    res.json(modifiedPrograms);
  } catch (err) {
    next(err);
  }
}

async function rate(
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
    const rateablePrograms = await programsService.rate(id, req.body);

    res.json(rateablePrograms);
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

    await programsService.destroy(id);

    res.json({
      message: `Программа с id=${id} была успешно уделена.`,
    });
  } catch (err) {
    next(err);
  }
}

async function saveImages(req: Request, res: Response, next: NextFunction) {
  try {
    const imagesNames = await imagesService.save(
      config.server.temp,
      req.files as unknown as ProgramImages
    );

    res.json(imagesNames);
  } catch (err) {
    next(err);
  }
}

export { create, getAll, getById, search, update, rate, destroy, saveImages };

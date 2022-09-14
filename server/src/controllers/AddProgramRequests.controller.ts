import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

import { UnprocessableEntityError } from '../modules/error';
import { addProgramRequestsService } from '../services';
import {
  IdParam,
  PaginationParams,
  AddProgramRequestFilterParams,
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

    const createdAddProgramRequest = await addProgramRequestsService.create(
      req.body
    );

    res.json(createdAddProgramRequest);
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

    const addProgramRequests = await addProgramRequestsService.getAll(
      req.query as unknown as PaginationParams
    );

    res.json(addProgramRequests);
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
    const addProgramRequest = await addProgramRequestsService.getById(id);

    res.json(addProgramRequest);
  } catch (err) {
    next(err);
  }
}

async function reject(
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
    const rejectedAddProgramRequest = await addProgramRequestsService.reject(
      id,
      req.body
    );

    res.json(rejectedAddProgramRequest);
  } catch (err) {
    next(err);
  }
}

async function complete(
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
    const completedAddProgramRequest = await addProgramRequestsService.complete(
      id
    );

    res.json(completedAddProgramRequest);
  } catch (err) {
    next(err);
  }
}

async function reset(
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
    const resetAddProgramRequest = await addProgramRequestsService.reset(id);

    res.json(resetAddProgramRequest);
  } catch (err) {
    next(err);
  }
}

async function filter(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new UnprocessableEntityError('Неверные параметры.', errors.array());
    }

    const addProgramRequests = await addProgramRequestsService.filter(
      req.query as unknown as AddProgramRequestFilterParams
    );

    res.json(addProgramRequests);
  } catch (err) {
    next(err);
  }
}

async function report(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new UnprocessableEntityError('Неверные параметры.', errors.array());
    }

    const report = await addProgramRequestsService.report(
      req.query as unknown as AddProgramRequestFilterParams
    );

    res.setHeader('Content-Type', 'application/pdf');
    res.send(report);
  } catch (err) {
    next(err);
  }
}

export { create, getAll, getById, reject, complete, reset, filter, report };

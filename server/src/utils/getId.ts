import { Request } from 'express';

import { BadRequestError } from '../modules/error';

function getId(req: Request): number {
  const id = Number(req.params['id']);

  if (isNaN(id)) throw new BadRequestError('id должен быть целым числом.');

  return id;
}

export default getId;

import { constants } from 'fs';
import { access, rm } from 'node:fs/promises';

import { BadRequestError } from '../modules/error';

async function deleteFile(file: string): Promise<void> {
  try {
    await access(file, constants.F_OK);

    return rm(file);
  } catch (err) {
    throw new BadRequestError('Файл не найден.');
  }
}

export default deleteFile;

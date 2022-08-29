import { constants } from 'fs';
import { access, rename } from 'node:fs/promises';

import { BadRequestError } from '../modules/error';

async function moveFile(file: string, moveTo: string): Promise<void> {
  try {
    await access(file, constants.F_OK);

    return rename(file, moveTo);
  } catch (err) {
    throw new BadRequestError('Файл не найден.');
  }
}

export default moveFile;

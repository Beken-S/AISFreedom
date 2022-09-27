import { constants } from 'fs';
import { access, rename } from 'node:fs/promises';

import { NotFoundError } from '../modules/error';

async function moveFile(file: string, moveTo: string): Promise<void> {
  try {
    await access(file, constants.F_OK);

    return rename(file, moveTo);
  } catch (err) {
    throw new NotFoundError('Файл не найден.');
  }
}

export default moveFile;

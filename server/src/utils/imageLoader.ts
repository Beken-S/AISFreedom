import path = require('path');

import { UploadedFile } from 'express-fileupload';
import { v4 as uuidv4 } from 'uuid';

import { BadRequestError } from '../modules/error';

import getImageExtension from './getImageExtension';

async function imageLoader(
  loadPath: string,
  file: UploadedFile
): Promise<string> {
  const { mimetype } = file;
  const extension = getImageExtension(mimetype);

  if (extension == null) {
    throw new BadRequestError('Неверный формат изображения.');
  }

  const fileName = uuidv4() + extension;
  const filePath = path.resolve(loadPath, fileName);

  return file.mv(filePath).then(() => fileName);
}

export default imageLoader;

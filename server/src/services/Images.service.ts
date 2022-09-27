import path = require('path');

import { ProgramImages } from '../types';
import { deleteFile, imageLoader, moveFile } from '../utils';

async function save(
  loadPath: string,
  { images }: ProgramImages
): Promise<string | string[]> {
  if (Array.isArray(images)) {
    const imagesNames = Promise.all(
      images.map((image) => imageLoader(loadPath, image))
    );

    return imagesNames;
  }

  return imageLoader(loadPath, images);
}

async function move(
  imageName: string | string[],
  from: string,
  to: string
): Promise<void | void[]> {
  if (Array.isArray(imageName)) {
    return Promise.all(
      imageName.map((name) => {
        const file = path.resolve(from, name);
        const moveTo = path.resolve(to, name);

        return moveFile(file, moveTo);
      })
    );
  }
  const file = path.resolve(from, imageName);
  const moveTo = path.resolve(to, imageName);

  return moveFile(file, moveTo);
}

async function destroy(
  imageName: string | string[],
  folder: string
): Promise<void | void[]> {
  if (Array.isArray(imageName)) {
    return Promise.all(
      imageName.map((name) => deleteFile(path.resolve(folder, name)))
    );
  }
  return deleteFile(path.resolve(folder, imageName));
}

export { save, move, destroy };

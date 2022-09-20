import { ScopeOptions } from 'sequelize';

import config from '../config';
import { Program, ProgramCreationAttributes } from '../models';
import { NotFoundError } from '../modules/error';
import { imagesService } from '../services';
import {
  PaginateOutput,
  PaginationParams,
  ProgramSearchOptions,
  Grade,
} from '../types';
import { getPageCount } from '../utils';

async function create(attributes: ProgramCreationAttributes): Promise<Program> {
  if (attributes.images != null) {
    await imagesService.move(
      attributes.images,
      config.server.temp,
      config.database.filesPath.images
    );
  }

  if (attributes.logo != null) {
    await imagesService.move(
      attributes.logo,
      config.server.temp,
      config.database.filesPath.logos
    );
  }
  return Program.create(attributes);
}

async function getAll({
  page,
  items_on_page,
}: PaginationParams): Promise<Program[] | PaginateOutput<Program>> {
  if (page != null && items_on_page != null) {
    const programs = await Program.scope([
      'orderById',
      'includeSources',
      { method: ['paginate', page, items_on_page] },
    ]).findAndCountAll();

    return {
      items: programs.rows,
      page_count: getPageCount(items_on_page, programs.count),
    };
  }

  return Program.scope(['orderById', 'includeSources']).findAll();
}

async function getById(id: number): Promise<Program> {
  const program = await Program.scope('includeSources').findByPk(id);

  if (program == null) {
    throw new NotFoundError(`Программа с id=${id} не найдена.`);
  }

  return program;
}

async function search({
  q,
  _in,
  program_type_id,
  operation_system_id,
  page,
  items_on_page,
}: ProgramSearchOptions): Promise<Program[] | PaginateOutput<Program>> {
  const scope: (string | ScopeOptions)[] = ['orderById', 'includeSources'];

  if (_in != null) scope.push({ method: ['searchIn', q, _in] });

  if (program_type_id != null) {
    scope.push({ method: ['filterByProgramTypeId', program_type_id] });
  }

  if (operation_system_id != null) {
    scope.push({ method: ['filterByOperationSystemId', operation_system_id] });
  }

  if (page != null && items_on_page != null) {
    scope.push({ method: ['paginate', page, items_on_page] });

    const programs = await Program.scope(scope).findAndCountAll();

    return {
      items: programs.rows,
      page_count: getPageCount(items_on_page, programs.count),
    };
  }

  return Program.scope(scope).findAll();
}

async function update(
  id: number,
  attributes: ProgramCreationAttributes
): Promise<Program> {
  const program = await getById(id);

  const { images: prevImages, logo: prevLogo } = program.get({ plain: true });
  const { images: currentImages, logo: currentLogo } = attributes;

  const createLogo = currentLogo != null && prevLogo == null;
  const updateLogo =
    currentLogo != null && prevLogo != null && prevLogo !== currentLogo;
  const deleteLogo = currentLogo == null && prevLogo != null;

  if (createLogo) {
    await imagesService.move(
      currentLogo,
      config.server.temp,
      config.database.filesPath.logos
    );
  }

  if (updateLogo) {
    await Promise.all([
      imagesService.destroy(prevLogo, config.database.filesPath.logos),
      imagesService.move(
        currentLogo,
        config.server.temp,
        config.database.filesPath.logos
      ),
    ]);
  }

  if (deleteLogo) {
    await imagesService.destroy(prevLogo, config.database.filesPath.logos);
  }

  const createImages = currentImages != null && prevImages == null;
  const updateImages = currentImages != null && prevImages != null;
  const deleteImages = currentImages == null && prevImages != null;

  if (createImages) {
    await imagesService.move(
      currentImages,
      config.server.temp,
      config.database.filesPath.images
    );
  }

  if (updateImages) {
    await Promise.all([
      ...prevImages.map((image) => {
        if (!currentImages.includes(image)) {
          imagesService.destroy(image, config.database.filesPath.images);
        }
      }),
      ...currentImages.map((image) => {
        if (!prevImages.includes(image)) {
          imagesService.move(
            image,
            config.server.temp,
            config.database.filesPath.images
          );
        }
      }),
    ]);
  }

  if (deleteImages) {
    await imagesService.destroy(prevImages, config.database.filesPath.images);
  }

  program.set(attributes);

  return program.save();
}

async function rate(id: number, { grade }: Grade): Promise<Program> {
  const program = await getById(id);

  await program.increment({ rating: grade, number_of_ratings: 1 });

  return program.reload();
}

async function destroy(id: number): Promise<void> {
  const program = await getById(id);

  const { images, logo } = program.get({ plain: true });

  if (images != null) {
    await imagesService.destroy(images, config.database.filesPath.images);
  }

  if (logo != null) {
    await imagesService.destroy(logo, config.database.filesPath.logos);
  }

  return program.destroy();
}

export { create, getAll, getById, search, update, destroy, rate };

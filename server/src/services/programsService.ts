// import config from '../config';
// import {
//   Program,
//   ProgramAttributes,
//   ProgramCreationAttributes,
//   // Source,
// } from '../models';
// import { BadRequestError } from '../modules/error';
// import { IPaginationFilter, ProgramSearchOptions } from '../modules/filters';
// import { imagesService } from '../services';
// import { PaginateOutput } from '../types';
// import { getPageCount, isEmpty } from '../utils';

// async function create(
//   attributes: ProgramCreationAttributes
// ): Promise<ProgramModel> {
//   if (!isEmpty(attributes.images)) {
//     await imagesService.move(
//       attributes.images,
//       config.database.filesPath.temp,
//       config.database.filesPath.images
//     );
//   }

//   if (attributes.logo != null) {
//     await imagesService.move(
//       attributes.logo,
//       config.database.filesPath.temp,
//       config.database.filesPath.logos
//     );
//   }
//   return Program.create(attributes);
// }

// async function getAll(
//   filter?: IPaginationFilter
// ): Promise<ProgramModel[] | PaginateOutput<ProgramModel>> {
//   if (filter != null) {
//     const programs = await Program.findAndCountAll({
//       order: ['id'],
//       include: {
//         model: Source,
//         as: 'sources',
//         attributes: ['distrib_url', 'operation_system_id'],
//         separate: true,
//       },
//       ...filter,
//     });

//     return {
//       items: programs.rows,
//       page_count: getPageCount(filter.limit, programs.count),
//     };
//   }
//   return Program.findAll({
//     order: ['id'],
//     include: {
//       model: Source,
//       as: 'sources',
//       attributes: ['distrib_url', 'operation_system_id'],
//       separate: true,
//     },
//   });
// }

// async function getById(id: number): Promise<ProgramModel | void> {
//   const program = await Program.findByPk(id, {
//     include: {
//       model: Source,
//       as: 'sources',
//       attributes: ['distrib_url', 'operation_system_id'],
//       separate: true,
//     },
//   });

//   if (program == null) {
//     throw new BadRequestError('Запись не найдена.');
//   }

//   return program;
// }

// async function search(
//   options: ProgramSearchOptions,
//   filter?: IPaginationFilter
// ): Promise<ProgramModel[] | PaginateOutput<ProgramModel>> {
//   if (filter != null) {
//     const programs = await Program.findAndCountAll({
//       ...options,
//       ...filter,
//     });

//     return {
//       items: programs.rows,
//       page_count: getPageCount(filter.limit, programs.count),
//     };
//   }

//   return Program.findAll(options);
// }

// async function update(attributes: ProgramAttributes): Promise<ProgramModel> {
//   const program = await Program.findOne({ where: { id: attributes.id } });

//   if (program == null) {
//     throw new BadRequestError('Запись не найдена.');
//   }

//   const { images: prevImages, logo: prevLogo } = program.get({ plain: true });
//   const { images: currentImages, logo: currentLogo } = attributes;

//   const createLogo = currentLogo != null && prevLogo == null;
//   const updateLogo =
//     currentLogo != null && prevLogo != null && prevLogo !== currentLogo;
//   const deleteLogo = currentLogo == null && prevLogo != null;

//   if (createLogo) {
//     await imagesService.move(
//       currentLogo,
//       config.database.filesPath.temp,
//       config.database.filesPath.logos
//     );
//   }

//   if (updateLogo) {
//     await Promise.all([
//       imagesService.destroy(prevLogo, config.database.filesPath.logos),
//       imagesService.move(
//         currentLogo,
//         config.database.filesPath.temp,
//         config.database.filesPath.logos
//       ),
//     ]);
//   }

//   if (deleteLogo) {
//     await imagesService.destroy(prevLogo, config.database.filesPath.logos);
//   }

//   const createImages = !isEmpty(currentImages) && isEmpty(prevImages);
//   const updateImages = !isEmpty(currentImages) && !isEmpty(prevImages);
//   const deleteImages = isEmpty(currentImages) && !isEmpty(prevImages);

//   if (createImages) {
//     await imagesService.move(
//       currentImages,
//       config.database.filesPath.temp,
//       config.database.filesPath.images
//     );
//   }

//   if (updateImages) {
//     await Promise.all([
//       ...prevImages.map((image) => {
//         if (!currentImages.includes(image)) {
//           imagesService.destroy(image, config.database.filesPath.images);
//         }
//       }),
//       ...currentImages.map((image) => {
//         if (!prevImages.includes(image)) {
//           imagesService.move(
//             image,
//             config.database.filesPath.temp,
//             config.database.filesPath.images
//           );
//         }
//       }),
//     ]);
//   }

//   if (deleteImages) {
//     await imagesService.destroy(prevImages, config.database.filesPath.images);
//   }

//   program.set(attributes);

//   return program.save();
// }

// async function destroy(id: number): Promise<boolean> {
//   const program = await getById(id);

//   if (program == null) {
//     throw new BadRequestError('Запись не найдена.');
//   }

//   const { images, logo } = program.get({ plain: true });

//   if (!isEmpty(images)) {
//     await imagesService.destroy(images, config.database.filesPath.images);
//   }

//   if (logo != null) {
//     await imagesService.destroy(logo, config.database.filesPath.logos);
//   }

//   await Program.destroy({ where: { id } });

//   return true;
// }

// export { create, getAll, getById, update, destroy, search };

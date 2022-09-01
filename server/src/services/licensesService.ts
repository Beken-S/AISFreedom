import {
  License,
  // LicenseAttributes,
  // LicenseCreationAttributes,
  // LicenseModel,
} from '../models';
import { BadRequestError } from '../modules/error';

// async function create(
//   attributes: LicenseCreationAttributes
// ): Promise<LicenseModel> {
//   return License.create(attributes);
// }

async function getAll(): Promise<License[]> {
  return License.findAll({ order: ['id'] });
}

// async function getById(id: number): Promise<LicenseModel> {
//   const license = await License.findByPk(id);

//   if (license == null) {
//     throw new BadRequestError('Запись не найдена.');
//   }

//   return license;
// }

// async function update(attributes: LicenseAttributes): Promise<LicenseModel> {
//   const license = await License.findOne({ where: { id: attributes.id } });

//   if (license == null) {
//     throw new BadRequestError('Запись не найдена.');
//   }

//   license.set(attributes);

//   return license.save();
// }

// async function destroy(id: number): Promise<boolean> {
//   const count = await License.destroy({ where: { id } });

//   if (count === 0) {
//     throw new BadRequestError('Запись не найдена.');
//   }

//   return true;
// }

// export { create, getAll, getById, update, destroy };

export { getAll };

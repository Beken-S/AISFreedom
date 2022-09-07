import { Optional, Op } from 'sequelize';
import { Table, Model, Column, DataType, Scopes } from 'sequelize-typescript';

import { getPaginationOptions } from '../utils';

type LicenseAttributes = {
  id: number;
  acronym?: string | null;
  name?: string | null;
  text_url_eng?: string | null;
  text_url_ru?: string | null;
  author?: string | null;
  year_of_creation?: Date | null;
};

type LicenseCreationAttributes = Optional<LicenseAttributes, 'id'>;

@Scopes(() => ({
  orderById: {
    order: ['id'],
  },
  filterByNameAndAcronym: (name: string, acronym: string) => ({
    where: {
      name: name,
      acronym: acronym,
    },
  }),
  paginate: getPaginationOptions,
}))
@Table({
  tableName: 'licenses',
  timestamps: false,
  indexes: [
    {
      unique: true,
      fields: ['acronym', 'name'],
      where: {
        acronym: {
          [Op.ne]: null,
        },
        name: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
class License extends Model<LicenseAttributes, LicenseCreationAttributes> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    validate: {
      notEmpty: true,
    },
  })
  acronym?: string | null;

  @Column({
    type: DataType.STRING,
    validate: {
      notEmpty: true,
    },
  })
  name?: string | null;

  @Column({
    type: DataType.STRING(2083),
    validate: {
      isUrl: true,
    },
  })
  text_url_eng?: string | null;

  @Column({
    type: DataType.STRING(2083),
    validate: {
      isUrl: true,
    },
  })
  text_url_ru?: string | null;

  @Column({
    type: DataType.STRING,
    validate: {
      notEmpty: true,
    },
  })
  author?: string;

  @Column({
    type: DataType.DATE,
    validate: {
      isDate: true,
    },
    get() {
      return this.getDataValue('year_of_creation')?.getFullYear().toString();
    },
  })
  year_of_creation?: Date | null;
}

export default License;
export { LicenseAttributes, LicenseCreationAttributes };

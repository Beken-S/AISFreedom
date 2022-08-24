import { Record, Number, String, Static } from 'runtypes';
import { DataTypes, Model, ModelDefined, Op } from 'sequelize';

import Database from './Database';

const LicenseAttributes = Record({
  id: Number,
  acronym: String.optional(),
  name: String.optional(),
  text_url_eng: String,
  text_url_ru: String.optional(),
});

type LicenseAttributes = Static<typeof LicenseAttributes>;

const LicenseCreationAttributes = LicenseAttributes.omit('id');

type LicenseCreationAttributes = Static<typeof LicenseCreationAttributes>;

type LicenseModel = Model<LicenseAttributes, LicenseCreationAttributes>;

type LicenseModelDefined = ModelDefined<
  LicenseAttributes,
  LicenseCreationAttributes
>;

const License: LicenseModelDefined = Database.define(
  'License',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    acronym: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    text_url_eng: {
      type: DataTypes.STRING(2083),
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    text_url_ru: {
      type: DataTypes.STRING(2083),
      validate: {
        isUrl: true,
      },
    },
  },
  {
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
  }
);

export default License;
export { LicenseAttributes, LicenseCreationAttributes, LicenseModel };

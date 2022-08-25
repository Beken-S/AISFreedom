import { Array, Record, Number, String, Static } from 'runtypes';
import { DataTypes, Model, ModelDefined } from 'sequelize';

import Database from './Database';

const ProgramAttributes = Record({
  id: Number,
  program_type_id: Number,
  license_id: Number.optional(),
  name: String,
  description: String.optional(),
  developer: String.optional(),
  home_page_url: String.optional(),
  proprietary_counterparts: Array(String).optional(),
  logo: String.optional(),
  images: Array(String).optional(),
  manual_url: String.optional(),
});

type ProgramAttributes = Static<typeof ProgramAttributes>;

const ProgramCreationAttributes = ProgramAttributes.omit('id');

type ProgramCreationAttributes = Static<typeof ProgramCreationAttributes>;

type ProgramModel = Model<ProgramAttributes, ProgramCreationAttributes>;

type ProgramModelDefined = ModelDefined<
  ProgramAttributes,
  ProgramCreationAttributes
>;

const Program: ProgramModelDefined = Database.define(
  'Program',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'name',
    },
    description: {
      type: DataTypes.TEXT,
    },
    developer: {
      type: DataTypes.STRING,
    },
    home_page_url: {
      type: DataTypes.STRING(2083),
      validate: {
        isUrl: true,
      },
    },
    proprietary_counterparts: {
      type: DataTypes.JSON,
    },
    logo: {
      type: DataTypes.STRING,
    },
    images: {
      type: DataTypes.JSON,
    },
    manual_url: {
      type: DataTypes.STRING(2083),
      validate: {
        isUrl: true,
      },
    },
    rating: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'programs',
    timestamps: false,
  }
);

export default Program;
export { ProgramAttributes, ProgramCreationAttributes, ProgramModel };

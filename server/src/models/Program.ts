import { Array, Record, Number, String, Static, Null } from 'runtypes';
import { DataTypes, Model, ModelDefined } from 'sequelize';

import Database from './Database';

const ProgramAttributes = Record({
  id: Number,
  program_type_id: Number,
  license_id: Number.Or(Null),
  name: String.withConstraint((str) => str != ''),
  description: String.Or(Null).withConstraint((str) => str != ''),
  developer: String.Or(Null).withConstraint((str) => str != ''),
  home_page_url: String.Or(Null).withConstraint((str) => str != ''),
  proprietary_counterparts: Array(String).withConstraint(
    (array) => !array.includes('')
  ),
  logo: String.Or(Null).withConstraint((str) => str != ''),
  images: Array(String).withConstraint((array) => !array.includes('')),
  manual_url: String.Or(Null).withConstraint((str) => str != ''),
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
      allowNull: false,
      defaultValue: [],
    },
    logo: {
      type: DataTypes.STRING,
    },
    images: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
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

import { Record, Number, String, Static } from 'runtypes';
import { ModelDefined, DataTypes, Model } from 'sequelize';

import Database from './Database';

const ProgramTypeAttributes = Record({
  id: Number,
  name: String,
});

type ProgramTypeAttributes = Static<typeof ProgramTypeAttributes>;

const ProgramTypeCreationAttributes = ProgramTypeAttributes.omit('id');

type ProgramTypeCreationAttributes = Static<
  typeof ProgramTypeCreationAttributes
>;

type ProgramTypeModel = Model<
  ProgramTypeAttributes,
  ProgramTypeCreationAttributes
>;

type ProgramTypeModelDefined = ModelDefined<
  ProgramTypeAttributes,
  ProgramTypeCreationAttributes
>;

const ProgramType: ProgramTypeModelDefined = Database.define(
  'ProgramType',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { tableName: 'program_types', timestamps: false }
);

export default ProgramType;
export {
  ProgramTypeAttributes,
  ProgramTypeCreationAttributes,
  ProgramTypeModel,
};

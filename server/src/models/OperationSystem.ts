import { Record, Number, String, Static } from 'runtypes';
import { ModelDefined, DataTypes, Model } from 'sequelize';

import Database from './Database';

const OperationSystemAttributes = Record({
  id: Number,
  name: String,
});

type OperationSystemAttributes = Static<typeof OperationSystemAttributes>;

const OperationSystemCreationAttributes = OperationSystemAttributes.omit('id');

type OperationSystemCreationAttributes = Static<
  typeof OperationSystemCreationAttributes
>;

type OperationSystemModel = Model<
  OperationSystemAttributes,
  OperationSystemCreationAttributes
>;

type OperationSystemModelDefined = ModelDefined<
  OperationSystemAttributes,
  OperationSystemCreationAttributes
>;

const OperationSystem: OperationSystemModelDefined = Database.define(
  'OperationSystem',
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
      set(value: string) {
        this.setDataValue('name', value.toLocaleLowerCase());
      },
    },
  },
  {
    tableName: 'operation_systems',
    timestamps: false,
  }
);

export default OperationSystem;
export {
  OperationSystemAttributes,
  OperationSystemCreationAttributes,
  OperationSystemModel,
};

import { Number, String, Record, Static } from 'runtypes';
import { ModelDefined, DataTypes, Model } from 'sequelize';

import Database from './Database';

const SourceAttributes = Record({
  id: Number,
  program_id: Number,
  operation_system_id: Number,
  distrib_url: String,
});

type SourceAttributes = Static<typeof SourceAttributes>;

const SourceCreationAttributes = SourceAttributes.omit('id');

type SourceCreationAttributes = Static<typeof SourceCreationAttributes>;

type SourceModel = Model<SourceAttributes, SourceCreationAttributes>;

type SourceModelDefined = ModelDefined<
  SourceAttributes,
  SourceCreationAttributes
>;

const Source: SourceModelDefined = Database.define(
  'Source',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    distrib_url: {
      type: DataTypes.STRING(2083),
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
  },
  {
    tableName: 'sources',
    timestamps: false,
    indexes: [
      {
        name: 'source',
        unique: true,
        fields: ['operation_system_id', 'program_id'],
      },
    ],
  }
);

export default Source;
export { SourceAttributes, SourceCreationAttributes, SourceModel };

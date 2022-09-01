import { Optional } from 'sequelize';
import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import OperationSystem from './OperationSystem.model';
import Program from './Program.model';

type SourceAttributes = {
  id: number;
  program_id: number;
  operation_system_id: number;
  distrib_url: string;
};

type SourceCreationAttributes = Optional<SourceAttributes, 'id'>;

@Table({
  tableName: 'sources',
  timestamps: false,
  indexes: [
    {
      name: 'source',
      unique: true,
      fields: ['operation_system_id', 'program_id'],
    },
  ],
})
class Source extends Model<SourceAttributes, SourceCreationAttributes> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ForeignKey(() => Program)
  @Column(DataType.INTEGER.UNSIGNED)
  program_id!: number;

  @ForeignKey(() => OperationSystem)
  @Column(DataType.INTEGER.UNSIGNED)
  operation_system_id!: number;

  @Column({
    type: DataType.STRING(2083),
    allowNull: false,
    validate: {
      isUrl: true,
    },
  })
  distrib_url!: string;

  @BelongsTo(() => Program)
  program!: Program;

  @BelongsTo(() => OperationSystem)
  operation_system!: OperationSystem;
}

export default Source;
export { SourceAttributes, SourceCreationAttributes };
// import { Number, String, Record, Static } from 'runtypes';
// import { ModelDefined, DataTypes, Model } from 'sequelize';

// import Database from './Database';

// const SourceAttributes = Record({
//   id: Number,
//   program_id: Number,
//   operation_system_id: Number,
//   distrib_url: String.withConstraint((str) => str != ''),
// });

// type SourceAttributes = Static<typeof SourceAttributes>;

// const SourceCreationAttributes = SourceAttributes.omit('id');

// type SourceCreationAttributes = Static<typeof SourceCreationAttributes>;

// type SourceModel = Model<SourceAttributes, SourceCreationAttributes>;

// type SourceModelDefined = ModelDefined<
//   SourceAttributes,
//   SourceCreationAttributes
// >;

// const Source: SourceModelDefined = Database.define(
//   'Source',
//   {
//     id: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     distrib_url: {
//       type: DataTypes.STRING(2083),
//       allowNull: false,
//       validate: {
//         isUrl: true,
//       },
//     },
//   },
//   {
//     tableName: 'sources',
//     timestamps: false,
//     indexes: [
//       {
//         name: 'source',
//         unique: true,
//         fields: ['operation_system_id', 'program_id'],
//       },
//     ],
//   }
// );

// export default Source;
// export { SourceAttributes, SourceCreationAttributes, SourceModel };

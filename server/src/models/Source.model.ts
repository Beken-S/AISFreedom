import { Optional } from 'sequelize';
import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  Scopes,
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

@Scopes(() => ({
  orderById: {
    order: ['id'],
  },
}))
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
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    validate: { isInt: true, min: 1 },
  })
  program_id!: number;

  @ForeignKey(() => OperationSystem)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    validate: { isInt: true, min: 1 },
  })
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

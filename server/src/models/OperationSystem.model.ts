import { Optional } from 'sequelize';
import { Table, Model, Column, DataType, Scopes } from 'sequelize-typescript';

type OperationSystemAttributes = {
  id: number;
  name: string;
};

type OperationSystemCreationAttributes = Optional<
  OperationSystemAttributes,
  'id'
>;

@Scopes(() => ({
  orderById: {
    order: ['id'],
  },
}))
@Table({
  tableName: 'operation_systems',
  timestamps: false,
})
class OperationSystem extends Model<
  OperationSystemAttributes,
  OperationSystemCreationAttributes
> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: 'name',
    validate: {
      notEmpty: true,
    },
  })
  name!: string;
}

export default OperationSystem;
export { OperationSystemAttributes, OperationSystemCreationAttributes };

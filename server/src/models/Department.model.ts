import { Optional } from 'sequelize';
import { Column, Model, Table, DataType, Scopes } from 'sequelize-typescript';

type DepartmentAttributes = {
  id: number;
  name: string;
};

type DepartmentCreationAttributes = Optional<DepartmentAttributes, 'id'>;

@Scopes(() => ({
  orderById: {
    order: ['id'],
  },
}))
@Table({
  tableName: 'departments',
  timestamps: false,
})
class Department extends Model<
  DepartmentAttributes,
  DepartmentCreationAttributes
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

export default Department;
export { DepartmentAttributes, DepartmentCreationAttributes };

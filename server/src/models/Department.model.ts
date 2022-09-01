import { DataTypes, Optional } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';

type DepartmentAttributes = {
  id: number;
  name: string;
};

type DepartmentCreationAttributes = Optional<DepartmentAttributes, 'id'>;

@Table({
  tableName: 'departments',
  timestamps: false,
})
class Department extends Model<
  DepartmentAttributes,
  DepartmentCreationAttributes
> {
  @Column({
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataTypes.STRING,
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

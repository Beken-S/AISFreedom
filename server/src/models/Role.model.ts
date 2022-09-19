import { Optional } from 'sequelize';
import { Column, Model, Table, DataType, Scopes } from 'sequelize-typescript';

type RoleAttributes = {
  id: number;
  name: string;
};

type RoleCreationAttributes = Optional<RoleAttributes, 'id'>;

@Scopes(() => ({
  orderById: {
    order: ['id'],
  },
}))
@Table({
  tableName: 'roles',
  timestamps: false,
})
class Role extends Model<RoleAttributes, RoleCreationAttributes> {
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

export default Role;
export { RoleAttributes, RoleCreationAttributes };

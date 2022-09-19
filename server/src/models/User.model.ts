import { Optional, DataTypes } from 'sequelize';
import {
  Column,
  Model,
  Table,
  ForeignKey,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';

import Role from './Role.model';

type UserAttributes = {
  id: number;
  role: string;
  name: string;
  login: string;
  email: string;
  password: string;
};

type UserCreationAttributes = Optional<UserAttributes, 'id'>;
type UserData = Optional<
  UserAttributes,
  'password' | 'email' | 'login' | 'name'
>;

type LoginAttributes = {
  password: string;
  login?: string;
  email?: string;
};

@Table({
  tableName: 'users',
  timestamps: false,
})
class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  role!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: 'login',
    validate: {
      notEmpty: true,
    },
  })
  login!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: 'email',
    validate: {
      isEmail: true,
    },
  })
  email!: string;

  @Column({
    type: DataTypes.STRING(60).BINARY,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  password!: string;

  @BelongsTo(() => Role, { targetKey: 'name', foreignKey: 'role' })
  userRole!: string;
}

export default User;
export { UserAttributes, UserCreationAttributes, UserData, LoginAttributes };

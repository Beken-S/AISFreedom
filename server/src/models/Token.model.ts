import { Optional } from 'sequelize';
import {
  Column,
  Model,
  Table,
  ForeignKey,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';

import User from './User.model';

type TokenAttributes = {
  id: number;
  user_id: number;
  refresh_token: string;
};

type TokenCreationAttributes = Optional<TokenAttributes, 'id'>;

@Table({
  tableName: 'tokens',
  timestamps: false,
})
class Token extends Model<TokenAttributes, TokenCreationAttributes> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    validate: { isInt: true, min: 1 },
  })
  user_id!: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  refresh_token!: string;

  @BelongsTo(() => User)
  userId!: string;
}

export default Token;
export { TokenAttributes, TokenCreationAttributes };

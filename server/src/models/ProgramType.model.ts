import { Optional } from 'sequelize';
import { Table, Column, Model, DataType, Scopes } from 'sequelize-typescript';

type ProgramTypeAttributes = {
  id: number;
  name: string;
};

type ProgramTypeCreationAttributes = Optional<ProgramTypeAttributes, 'id'>;

@Scopes(() => ({
  orderById: {
    order: ['id'],
  },
}))
@Table({
  tableName: 'program_types',
  timestamps: false,
})
class ProgramType extends Model<
  ProgramTypeAttributes,
  ProgramTypeCreationAttributes
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

export default ProgramType;
export { ProgramTypeAttributes, ProgramTypeCreationAttributes };

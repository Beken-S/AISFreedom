import { DataTypes, Optional } from 'sequelize';
import { Column, CreatedAt, Model, Table } from 'sequelize-typescript';

type AddProgramsRequestAttributes = {
  id: number;
  department_id: number;
  programs_names: string;
  basis: string;
  username: string;
  user_email: string;
  is_rejected: boolean;
  is_completed: boolean;
  consider_before_date: Date;
};

type AddProgramsRequestCreationAttributes = Optional<
  AddProgramsRequestAttributes,
  'id' | 'is_rejected' | 'is_completed'
>;

@Table({
  tableName: 'add_programs_requests',
  timestamps: false,
})
class AddProgramsRequest extends Model<
  AddProgramsRequestAttributes,
  AddProgramsRequestCreationAttributes
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
    validate: {
      notEmpty: true,
    },
  })
  basis!: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  username!: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  })
  user_email!: string;

  @Column({
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_rejected!: boolean;

  @Column({
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_completed!: boolean;

  @Column({
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: true,
    },
  })
  consider_before_date!: Date;

  @CreatedAt
  creation_date!: Date;
}

export default AddProgramsRequest;
export { AddProgramsRequestAttributes, AddProgramsRequestCreationAttributes };

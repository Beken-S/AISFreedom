import { Optional } from 'sequelize';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

type ProgramTypeAttributes = {
  id: number;
  name: string;
};

type ProgramTypeCreationAttributes = Optional<ProgramTypeAttributes, 'id'>;

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

// import { Record, Number, String, Static } from 'runtypes';
// import { ModelDefined, DataTypes, Model } from 'sequelize';

// import Database from './Database';

// const ProgramTypeAttributes = Record({
//   id: Number,
//   name: String.withConstraint((str) => str != ''),
// });

// type ProgramTypeAttributes = Static<typeof ProgramTypeAttributes>;

// const ProgramTypeCreationAttributes = ProgramTypeAttributes.omit('id');

// type ProgramTypeCreationAttributes = Static<
//   typeof ProgramTypeCreationAttributes
// >;

// type ProgramTypeModel = Model<
//   ProgramTypeAttributes,
//   ProgramTypeCreationAttributes
// >;

// type ProgramTypeModelDefined = ModelDefined<
//   ProgramTypeAttributes,
//   ProgramTypeCreationAttributes
// >;

// const ProgramType: ProgramTypeModelDefined = Database.define(
//   'ProgramType',
//   {
//     id: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: 'name',
//     },
//   },
//   { tableName: 'program_types', timestamps: false }
// );

// export default ProgramType;
// export {
//   ProgramTypeAttributes,
//   ProgramTypeCreationAttributes,
//   ProgramTypeModel,
// };

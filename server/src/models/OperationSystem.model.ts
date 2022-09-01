import { Optional } from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

type OperationSystemAttributes = {
  id: number;
  name: string;
};

type OperationSystemCreationAttributes = Optional<
  OperationSystemAttributes,
  'id'
>;

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

// import { Record, Number, String, Static } from 'runtypes';
// import { ModelDefined, DataTypes, Model } from 'sequelize';

// import Database from './Database';

// const OperationSystemAttributes = Record({
//   id: Number,
//   name: String.withConstraint((str) => str != ''),
// });

// type OperationSystemAttributes = Static<typeof OperationSystemAttributes>;

// const OperationSystemCreationAttributes = OperationSystemAttributes.omit('id');

// type OperationSystemCreationAttributes = Static<
//   typeof OperationSystemCreationAttributes
// >;

// type OperationSystemModel = Model<
//   OperationSystemAttributes,
//   OperationSystemCreationAttributes
// >;

// type OperationSystemModelDefined = ModelDefined<
//   OperationSystemAttributes,
//   OperationSystemCreationAttributes
// >;

// const OperationSystem: OperationSystemModelDefined = Database.define(
//   'OperationSystem',
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
//       set(value: string) {
//         this.setDataValue('name', value.toLocaleLowerCase());
//       },
//     },
//   },
//   {
//     tableName: 'operation_systems',
//     timestamps: false,
//   }
// );

// export default OperationSystem;
// export {
//   OperationSystemAttributes,
//   OperationSystemCreationAttributes,
//   OperationSystemModel,
// };

// import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';

// import Database from './Database';

// type DepartmentAttributes = {
//   id: number;
//   name: string;
// };

// type DepartmentCreationAttributes = Optional<DepartmentAttributes, 'id'>;

// type DepartmentModel = Model<
//   DepartmentAttributes,
//   DepartmentCreationAttributes
// >;

// type DepartmentModelDefined = ModelDefined<
//   DepartmentAttributes,
//   DepartmentCreationAttributes
// >;

// const Department: DepartmentModelDefined = Database.define(
//   'Department',
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
//       validate: {
//         notEmpty: true,
//       },
//     },
//   },
//   {
//     tableName: 'departments',
//     timestamps: false,
//   }
// );

// export default Department;
// export { DepartmentAttributes, DepartmentCreationAttributes, DepartmentModel };

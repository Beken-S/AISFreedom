// import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';

// import Database from './Database';

// type AddProgramsRequestAttributes = {
//   id: number;
//   department_id: number;
//   programs_names: string;
//   basis: string;
//   username: string;
//   user_email: string;
//   is_rejected: boolean;
//   is_completed: boolean;
//   consider_before_date: string;
// };

// type AddProgramsRequestCreationAttributes = Optional<
//   AddProgramsRequestAttributes,
//   'id' | 'is_rejected' | 'is_completed'
// >;
// type AddProgramsRequestModel = Model<
//   AddProgramsRequestAttributes,
//   AddProgramsRequestCreationAttributes
// >;

// type AddProgramsRequestModelDefined = ModelDefined<
//   AddProgramsRequestAttributes,
//   AddProgramsRequestCreationAttributes
// >;

// const AddProgramRequest: AddProgramsRequestModelDefined = Database.define(
//   'AddProgramRequest',
//   {
//     id: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     programs_names: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     basis: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     user_email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         isEmail: true,
//       },
//     },
//     is_rejected: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//       defaultValue: false,
//     },
//     is_completed: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//       defaultValue: false,
//     },
//     consider_before_date: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       validate: {
//         isDate: true,
//       },
//     },
//   },
//   {
//     tableName: 'add_programs_requests',
//     timestamps: false,
//     createdAt: 'created_date',
//   }
// );

// export default AddProgramRequest;
// export {
//   AddProgramsRequestAttributes,
//   AddProgramsRequestCreationAttributes,
//   AddProgramsRequestModel,
// };

import { Sequelize } from 'sequelize-typescript';

import config from '../config';

import initDatabase from './init';

const { name, user, password, options } = config.database;

const database = new Sequelize(name, user, password, options);

export default database;
export { initDatabase };

// import ProgramType from '../models/ProgramType';
// import Source from '../models/Source';

// AddProgramRequest.belongsTo(Department, {
//   foreignKey: {
//     name: 'department_id',
//   },
// });
// Department.hasMany(AddProgramRequest, {
//   foreignKey: {
//     name: 'department_id',
//   },
// });

// Program.belongsTo(License, {
//   foreignKey: {
//     name: 'license_id',
//   },
// });

// Program.belongsTo(ProgramType, {
//   foreignKey: {
//     name: 'program_type_id',
//     allowNull: false,
//   },
// });

// Program.hasMany(Source, {
//   as: 'sources',
//   foreignKey: {
//     name: 'program_id',
//     allowNull: false,
//   },
// });
// Program.hasMany(Source, {
//   as: 'filter',
//   foreignKey: {
//     name: 'program_id',
//     allowNull: false,
//   },
// });
// Source.belongsTo(Program, {
//   foreignKey: {
//     name: 'program_id',
//   },
// });

// Source.belongsTo(OperationSystem, {
//   foreignKey: {
//     name: 'operation_system_id',
//   },
// });

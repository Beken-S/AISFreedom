import { Sequelize } from 'sequelize';

import config from '../config';
import { isDevMode } from '../utils';

const { name, user, password, options } = config.database;

const Database = new Sequelize(name, user, password, options);

export default Database;

import License from './License';
import OperationSystem from './OperationSystem';
import Program from './Program';
import ProgramType from './ProgramType';
import Source from './Source';

async function initDatabase(db: Sequelize): Promise<void> {
  await db.sync({ alter: isDevMode() });
}

Program.belongsTo(License, {
  foreignKey: {
    name: 'license_id',
  },
});
Program.belongsTo(ProgramType, {
  foreignKey: {
    name: 'program_type_id',
    allowNull: false,
  },
});
ProgramType.hasMany(Program, {
  foreignKey: {
    name: 'program_type_id',
  },
});
License.hasMany(Program, {
  foreignKey: {
    name: 'license_id',
  },
});
Program.hasMany(Source, {
  foreignKey: {
    name: 'program_id',
    allowNull: false,
  },
});
Source.belongsTo(Program, {
  foreignKey: {
    name: 'program_id',
  },
});
OperationSystem.hasMany(Source, {
  foreignKey: {
    name: 'operation_system_id',
    allowNull: false,
  },
});
Source.belongsTo(OperationSystem, {
  foreignKey: {
    name: 'operation_system_id',
  },
});

export { initDatabase };

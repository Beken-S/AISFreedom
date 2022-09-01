import { Sequelize } from 'sequelize-typescript';

import {
  License,
  OperationSystem,
  ProgramType,
  Program,
  Source,
} from '../models';
import { isDevMode } from '../utils';

import {
  LICENSES,
  OPERATION_SYSTEMS,
  PROGRAM_TYPES,
  PROGRAMS,
  SOURCES,
} from './data';

async function initDatabase(db: Sequelize): Promise<void> {
  await db.sync({ force: isDevMode() });

  if (isDevMode()) {
    await License.bulkCreate(LICENSES);
    await OperationSystem.bulkCreate(OPERATION_SYSTEMS);
    await ProgramType.bulkCreate(PROGRAM_TYPES);
    await Program.bulkCreate(PROGRAMS);
    await Source.bulkCreate(SOURCES);
  }
}

export default initDatabase;

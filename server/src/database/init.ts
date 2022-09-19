import fs = require('fs/promises');
import path = require('path');

import { Sequelize } from 'sequelize-typescript';

import {
  Article,
  License,
  OperationSystem,
  ProgramType,
  Program,
  Source,
  Department,
  AddProgramsRequest,
  NormativeDocument,
  Role,
} from '../models';
import { usersService } from '../services';
import { isDevMode } from '../utils';

const DATA_PATH = path.resolve(__dirname, '../../db/data');

async function initDatabase(db: Sequelize): Promise<void> {
  await db.sync({ force: isDevMode() });

  if (isDevMode()) {
    const [
      LICENSES,
      OPERATION_SYSTEMS,
      PROGRAM_TYPES,
      PROGRAMS,
      SOURCES,
      DEPARTMENTS,
      REQUESTS,
      NORMATIVE_DOCUMENTS,
      ARTICLES,
      ROLES,
    ] = await Promise.all([
      fs
        .readFile(DATA_PATH + '/licenses.json', 'utf-8')
        .then((res) => JSON.parse(res)),
      fs
        .readFile(DATA_PATH + '/operation_systems.json', 'utf-8')
        .then((res) => JSON.parse(res)),
      fs
        .readFile(DATA_PATH + '/program_types.json', 'utf-8')
        .then((res) => JSON.parse(res)),
      fs
        .readFile(DATA_PATH + '/programs.json', 'utf-8')
        .then((res) => JSON.parse(res)),
      fs
        .readFile(DATA_PATH + '/sources.json', 'utf-8')
        .then((res) => JSON.parse(res)),
      fs
        .readFile(DATA_PATH + '/departments.json', 'utf-8')
        .then((res) => JSON.parse(res)),
      fs
        .readFile(DATA_PATH + '/requests.json', 'utf-8')
        .then((res) => JSON.parse(res)),
      fs
        .readFile(DATA_PATH + '/normative_documents.json', 'utf-8')
        .then((res) => JSON.parse(res)),
      fs
        .readFile(DATA_PATH + '/articles.json', 'utf-8')
        .then((res) => JSON.parse(res)),
      fs
        .readFile(DATA_PATH + '/roles.json', 'utf-8')
        .then((res) => JSON.parse(res)),
    ]);

    await License.bulkCreate(LICENSES);
    await OperationSystem.bulkCreate(OPERATION_SYSTEMS);
    await ProgramType.bulkCreate(PROGRAM_TYPES);
    await Program.bulkCreate(PROGRAMS);
    await Source.bulkCreate(SOURCES);
    await Department.bulkCreate(DEPARTMENTS);
    await AddProgramsRequest.bulkCreate(REQUESTS);
    await NormativeDocument.bulkCreate(NORMATIVE_DOCUMENTS);
    await Article.bulkCreate(ARTICLES);
    await Role.bulkCreate(ROLES);
    await usersService.create({
      role: 'admin',
      name: 'admin',
      login: 'admin',
      email: 'admin@admin.com',
      password: 'password',
    });
  }
}

export default initDatabase;

import { Sequelize } from 'sequelize-typescript';

import config from '../config';

import initDatabase from './init';

const { name, user, password, options } = config.database;

const database = new Sequelize(name, user, password, options);

export default database;
export { initDatabase };

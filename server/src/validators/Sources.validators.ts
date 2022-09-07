import { checkSchema, Schema } from 'express-validator';

import {
  Source,
  SourceCreationAttributes,
  OperationSystem,
  Program,
} from '../models';
import { IdParam } from '../types';
import { getOptionalSchema } from '../utils';

import checkValidKey from './checkValidKey';
import validateIdParam from './validateIdParams';

type Attributes = keyof SourceCreationAttributes;

const CREATION_ATTRIBUTES: Attributes[] = [
  'program_id',
  'operation_system_id',
  'distrib_url',
];

const CREATION_SCHEMA: Schema = {
  program_id: {
    exists: {
      errorMessage: 'Отсутствует обязательное поле.',
      bail: true,
    },
    isInt: {
      options: { min: 1 },
      errorMessage: 'Должно быть натуральным числом.',
      bail: true,
    },
    custom: {
      options: async (value, { req }) => {
        const program = await Program.findByPk(value);

        if (program == null) {
          throw new Error('В базе данных нет программ с таким id.');
        }

        const operation_system_id = req.body['operation_system_id'];
        const { id } = req.params as unknown as IdParam;

        if (operation_system_id == null && id != null) {
          const prevSource = await Source.findByPk(id);

          if (prevSource == null) return;

          const { operation_system_id } = prevSource.get({ plain: true });

          const source = await Source.findOne({
            where: { program_id: value, operation_system_id },
          });

          if (source != null) {
            throw new Error('Такой источник уже существует.');
          }
        }

        if (operation_system_id != null) {
          const source = await Source.findOne({
            where: { program_id: value, operation_system_id },
          });

          if (source != null) {
            throw new Error('Такой источник уже существует.');
          }
        }
      },
    },
  },
  operation_system_id: {
    exists: {
      errorMessage: 'Отсутствует обязательное поле.',
      bail: true,
    },
    isInt: {
      options: { min: 1 },
      errorMessage: 'Должно быть натуральным числом.',
      bail: true,
    },
    custom: {
      options: async (value, { req }) => {
        const operationSystem = await OperationSystem.findByPk(value);

        if (operationSystem == null) {
          throw new Error('В базе данных нет операционных систем с таким id.');
        }

        const program_id = req.body['program_id'];
        const { id } = req.params as unknown as IdParam;

        if (program_id == null && id != null) {
          const prevSource = await Source.findByPk(id);

          if (prevSource == null) return;

          const { program_id } = prevSource.get({ plain: true });

          const source = await Source.findOne({
            where: { program_id, operation_system_id: value },
          });

          if (source != null) {
            throw new Error('Такой источник уже существует.');
          }
        }

        if (program_id != null) {
          const source = await Source.findOne({
            where: { program_id, operation_system_id: value },
          });

          if (source != null) {
            throw new Error('Такой источник уже существует.');
          }
        }
      },
    },
  },
  distrib_url: {
    exists: {
      errorMessage: 'Отсутствует обязательное поле.',
      bail: true,
    },
    trim: true,
    isURL: {
      errorMessage: 'Должно быть URL строкой.',
    },
  },
};

function createRequest() {
  return [
    checkValidKey(CREATION_ATTRIBUTES, 'body'),
    checkSchema(CREATION_SCHEMA, ['body']),
  ];
}

function getByIdRequest() {
  return [validateIdParam()];
}

function updateRequest() {
  return [
    validateIdParam(),
    checkValidKey(CREATION_ATTRIBUTES, 'body'),
    checkSchema(
      getOptionalSchema(CREATION_SCHEMA, [
        'program_id',
        'operation_system_id',
        'distrib_url',
      ]),
      ['body']
    ),
  ];
}

function destroyRequest() {
  return [validateIdParam()];
}

export { createRequest, getByIdRequest, updateRequest, destroyRequest };

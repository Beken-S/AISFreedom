import { checkSchema, Schema } from 'express-validator';

import { Department, DepartmentCreationAttributes } from '../models';
import { getOptionalSchema } from '../utils';

import checkValidKey from './checkValidKey';
import validateIdParam from './validateIdParams';

type Attributes = keyof DepartmentCreationAttributes;

const CREATION_ATTRIBUTES: Attributes[] = ['name'];

const CREATION_SCHEMA: Schema = {
  name: {
    exists: {
      errorMessage: 'Отсутствует обязательное поле.',
      bail: true,
    },
    isString: {
      errorMessage: 'Должно быть строкой.',
      bail: true,
    },
    trim: true,
    notEmpty: {
      errorMessage: 'Не может быть пустой строкой.',
      bail: true,
    },
    custom: {
      options: async (value) => {
        if (value != null) {
          const operationSystem = await Department.findOne({
            where: { name: value },
          });

          if (operationSystem != null) {
            throw new Error('Такое подразделение уже существует.');
          }
        }
      },
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
    checkSchema(getOptionalSchema(CREATION_SCHEMA, ['name']), ['body']),
  ];
}

function destroyRequest() {
  return [validateIdParam()];
}

export { createRequest, getByIdRequest, updateRequest, destroyRequest };

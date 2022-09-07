import { checkSchema, Schema } from 'express-validator';

import { License, LicenseCreationAttributes } from '../models';
import { IdParam, PaginationParams } from '../types';
import { getOptionalSchema } from '../utils';

import checkValidKey from './checkValidKey';
import validateIdParam from './validateIdParams';
import validatePaginationQuery from './validatePaginationQuery';

type GetAllQueryParams = keyof PaginationParams;

const GET_ALL_QUERY_PARAMS: GetAllQueryParams[] = ['page', 'items_on_page'];

type Attributes = keyof LicenseCreationAttributes;

const CREATION_ATTRIBUTES: Attributes[] = [
  'name',
  'acronym',
  'text_url_eng',
  'text_url_ru',
  'author',
  'year_of_creation',
];

const CREATION_SCHEMA: Schema = {
  acronym: {
    optional: {
      options: { nullable: true },
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
      options: async (value, { req }) => {
        const name = req.body['name'];
        const { id } = req.params as unknown as IdParam;

        if (name == null && id == null) {
          throw new Error('Не может быть задан без имени.');
        }

        if (name == null && id != null) {
          const prevLicense = await License.findByPk(id);

          if (prevLicense == null) return;

          const { name } = prevLicense.get({ plain: true });

          if (name == null) {
            throw new Error('Не может быть задан без имени.');
          }

          const license = await License.scope({
            method: ['filterByNameAndAcronym', name, value],
          }).findOne();

          if (license != null) {
            throw new Error(
              'Лицензия с таким акронимом и именем уже существует.'
            );
          }
        }

        if (name != null) {
          const license = await License.scope({
            method: ['filterByNameAndAcronym', name, value],
          }).findOne();

          if (license != null) {
            throw new Error(
              'Лицензия с таким акронимом и именем уже существует.'
            );
          }
        }
      },
    },
  },
  name: {
    optional: {
      options: { nullable: true },
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
      options: async (value, { req }) => {
        const acronym = req.body['acronym'];
        const { id } = req.params as unknown as IdParam;

        if (acronym === undefined && id != null) {
          const prevLicense = await License.findByPk(id);

          if (prevLicense == null) return;

          const { acronym } = prevLicense.get({ plain: true });

          if (acronym == null) return;

          const license = await License.scope({
            method: ['filterByNameAndAcronym', value, acronym],
          }).findOne();

          if (license != null) {
            throw new Error(
              'Лицензия с таким акронимом и именем уже существует.'
            );
          }
        }

        if (acronym !== null) {
          const license = await License.scope({
            method: ['filterByNameAndAcronym', value, acronym],
          }).findOne();

          if (license != null) {
            throw new Error(
              'Лицензия с таким акронимом и именем уже существует.'
            );
          }
        }
      },
    },
  },
  text_url_ru: {
    optional: {
      options: { nullable: true },
    },
    trim: true,
    isURL: {
      errorMessage: 'Должно быть URL строкой.',
    },
  },
  text_url_eng: {
    optional: {
      options: { nullable: true },
    },
    trim: true,
    isURL: {
      errorMessage: 'Должно быть URL строкой.',
    },
  },
  author: {
    optional: {
      options: { nullable: true },
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
  },
  year_of_creation: {
    optional: {
      options: { nullable: true },
    },
    isISO8601: {
      errorMessage: 'Должно быть датой в формате ISO8601.',
    },
  },
};

function createRequest() {
  return [
    checkValidKey(CREATION_ATTRIBUTES, 'body'),
    checkSchema(CREATION_SCHEMA, ['body']),
  ];
}

function getAllRequest() {
  return [
    checkValidKey(GET_ALL_QUERY_PARAMS, 'query', 'Недопустимый параметр'),
    validatePaginationQuery(),
  ];
}

function getByIdRequest() {
  return [validateIdParam()];
}

function updateRequest() {
  return [
    validateIdParam(),
    checkValidKey(CREATION_ATTRIBUTES, 'body'),
    checkSchema(getOptionalSchema(CREATION_SCHEMA, ['text_url_eng']), ['body']),
  ];
}

function destroyRequest() {
  return [validateIdParam()];
}

export {
  createRequest,
  getAllRequest,
  getByIdRequest,
  updateRequest,
  destroyRequest,
};

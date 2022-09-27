import { checkSchema, Schema } from 'express-validator';

import {
  Program,
  ProgramCreationAttributes,
  ProgramType,
  License,
} from '../models';
import {
  ProgramSearchOptions,
  isProgramSearchInOption,
  PaginationParams,
  Grade,
} from '../types';
import { getOptionalSchema } from '../utils';

import checkValidKey from './checkValidKey';
import validateIdParam from './validateIdParams';
import validatePaginationQuery from './validatePaginationQuery';

type GetAllQueryParams = keyof PaginationParams;

const GET_ALL_QUERY_PARAMS: GetAllQueryParams[] = ['page', 'items_on_page'];

type SearchQueryParams = keyof ProgramSearchOptions;

const SEARCH_QUERY_PARAMS: SearchQueryParams[] = [
  'q',
  '_in',
  'operation_system_id',
  'program_type_id',
  'page',
  'items_on_page',
];

type Attributes = keyof ProgramCreationAttributes;

const CREATION_ATTRIBUTES: Attributes[] = [
  'description',
  'developer',
  'home_page_url',
  'images',
  'license_id',
  'logo',
  'manual_url',
  'name',
  'program_type_id',
  'proprietary_counterparts',
];

const SEARCH_SCHEMA: Schema = {
  q: {
    exists: {
      errorMessage: 'Отсутствует обязательный параметр.',
    },
    toLowerCase: true,
  },
  _in: {
    customSanitizer: {
      options: (value, { req }) => {
        if (value == null && req.query != null) {
          value = 'name';
        }
        return value;
      },
    },
    custom: {
      options: (value) => {
        return isProgramSearchInOption(value);
      },
      errorMessage: 'Недопустимое значение.',
    },
  },
  operation_system_id: {
    optional: true,
    isInt: {
      options: { min: 1 },
      errorMessage: 'Должно быть натуральным числом.',
    },
    toInt: true,
  },
  program_type_id: {
    optional: true,
    isInt: {
      options: { min: 1 },
      errorMessage: 'Должно быть натуральным числом.',
    },
    toInt: true,
  },
};

const CREATION_SCHEMA: Schema = {
  program_type_id: {
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
      options: async (value) => {
        const programType = await ProgramType.findByPk(value);

        if (programType == null) {
          throw new Error('В базе данных нет класса программ с таким id.');
        }
      },
    },
  },
  license_id: {
    optional: {
      options: { nullable: true },
    },
    isInt: {
      options: { min: 1 },
      errorMessage: 'Должно быть натуральным числом.',
      bail: true,
    },
    custom: {
      options: async (value) => {
        const license = await License.findByPk(value);

        if (license == null) {
          throw new Error('В базе данных нет лицензий с таким id.');
        }
      },
    },
  },
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
          const program = await Program.findOne({ where: { name: value } });

          if (program != null) {
            throw new Error('Программа с таким именем уже существует.');
          }
        }
      },
    },
  },
  description: {
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
    },
  },
  developer: {
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
    },
  },
  logo: {
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
    },
  },
  home_page_url: {
    optional: {
      options: { nullable: true },
    },
    trim: true,
    isURL: {
      errorMessage: 'Должно быть URL строкой.',
    },
  },
  manual_url: {
    optional: {
      options: { nullable: true },
    },
    trim: true,
    isURL: {
      errorMessage: 'Должно быть URL строкой.',
    },
  },
  proprietary_counterparts: {
    optional: {
      options: { nullable: true },
    },
    isArray: {
      options: { min: 1 },
      errorMessage: 'Не может быть пустым массивом.',
      bail: true,
    },
    customSanitizer: {
      options: (value: Array<unknown>) => {
        return value.map((item) => {
          if (typeof item === 'string') {
            return item.trim();
          }
          return item;
        });
      },
    },
    custom: {
      options: (value: Array<unknown>) => {
        return value.every((item) => typeof item === 'string' && item !== '');
      },
      errorMessage: 'Может содержать только непустые строки.',
    },
  },
  images: {
    optional: {
      options: { nullable: true },
    },
    isArray: {
      options: { min: 1 },
      errorMessage: 'Не может быть пустым массивом.',
      bail: true,
    },
    customSanitizer: {
      options: (value: Array<unknown>) => {
        return value.map((item) => {
          if (typeof item === 'string') {
            return item.trim();
          }
          return item;
        });
      },
    },
    custom: {
      options: (value: Array<unknown>) => {
        return value.every((item) => typeof item === 'string' && item !== '');
      },
      errorMessage: 'Может содержать только непустые строки.',
    },
  },
};

type RateAttributes = keyof Grade;
const RATE_ATTRIBUTES: RateAttributes[] = ['grade'];
const RATE_SCHEMA: Schema = {
  grade: {
    exists: {
      errorMessage: 'Отсутствует обязательное поле.',
      bail: true,
    },
    isInt: {
      options: { min: 1, max: 5 },
      errorMessage: 'Должно быть целым числом от 1 до 5.',
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

function searchRequest() {
  return [
    checkValidKey(SEARCH_QUERY_PARAMS, 'query', 'Недопустимый параметр'),
    checkSchema(SEARCH_SCHEMA, ['query']),
    validatePaginationQuery(),
  ];
}

function updateRequest() {
  return [
    validateIdParam(),
    checkValidKey(CREATION_ATTRIBUTES, 'body'),
    checkSchema(
      getOptionalSchema(CREATION_SCHEMA, [
        'program_type_id',
        'license_id',
        'name',
      ]),
      ['body']
    ),
  ];
}

function rateRequest() {
  return [
    validateIdParam(),
    checkValidKey(RATE_ATTRIBUTES, 'body'),
    checkSchema(RATE_SCHEMA, ['body']),
  ];
}

function destroyRequest() {
  return [validateIdParam()];
}

function saveImagesRequest() {
  return [checkValidKey(['images'], 'files')];
}

export {
  createRequest,
  getAllRequest,
  getByIdRequest,
  searchRequest,
  updateRequest,
  destroyRequest,
  rateRequest,
  saveImagesRequest,
};

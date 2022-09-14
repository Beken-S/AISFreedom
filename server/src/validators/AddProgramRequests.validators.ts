import { checkSchema, Schema } from 'express-validator';

import { AddProgramsRequestCreationAttributes, Department } from '../models';
import {
  PaginationParams,
  AddProgramRequestFilterParams,
  isAddProgramRequestStatus,
} from '../types';

import checkValidKey from './checkValidKey';
import validateIdParam from './validateIdParams';
import validatePaginationQuery from './validatePaginationQuery';

type GetAllQueryParams = keyof PaginationParams;

const GET_ALL_QUERY_PARAMS: GetAllQueryParams[] = ['page', 'items_on_page'];

type Attributes = keyof AddProgramsRequestCreationAttributes;

const CREATION_ATTRIBUTES: Attributes[] = [
  'department_id',
  'programs_names',
  'adding_reason',
  'username',
  'user_position',
  'user_phone',
  'user_email',
  'consider_before_date',
];
const CREATION_SCHEMA: Schema = {
  department_id: {
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
        const department = await Department.findByPk(value);

        if (department == null) {
          throw new Error('В базе данных нет подразделения с таким id.');
        }
      },
    },
  },
  programs_names: {
    exists: {
      errorMessage: 'Отсутствует обязательное поле.',
      bail: true,
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
  adding_reason: {
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
    },
  },
  username: {
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
    },
  },
  user_position: {
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
    },
  },
  user_phone: {
    optional: {
      options: { nullable: true },
    },
    isString: {
      errorMessage: 'Должно быть строкой.',
      bail: true,
    },
    trim: true,
    isMobilePhone: {
      options: [['ru-RU'], { strictMode: true }],
      errorMessage: 'Должно быть номером телефона в формате +7XXXXXXXXXX.',
    },
  },
  user_email: {
    exists: {
      errorMessage: 'Отсутствует обязательное поле.',
      bail: true,
    },
    trim: true,
    isEmail: {
      errorMessage: 'Должно быть корректным email адресом.',
    },
  },
  consider_before_date: {
    exists: {
      errorMessage: 'Отсутствует обязательное поле.',
      bail: true,
    },
    isISO8601: {
      errorMessage: 'Должно быть строкой с датой в формате ISO8601.',
    },
    custom: {
      options: (value) => {
        const dateNow = new Date();
        const considerBefore = new Date(value);

        return dateNow < considerBefore;
      },
      errorMessage: 'Не может быть меньше текущей даты.',
    },
  },
};

const REJECTION_ATTRIBUTE: Attributes[] = ['comment'];
const REJECTION_SCHEMA: Schema = {
  comment: {
    optional: { options: { nullable: true } },
    isString: {
      errorMessage: 'Должно быть строкой.',
      bail: true,
    },
    trim: true,
    notEmpty: {
      errorMessage: 'Не может быть пустой строкой.',
    },
  },
};

type FilterAttributes = keyof AddProgramRequestFilterParams;
const FILTER_ATTRIBUTE: FilterAttributes[] = [
  'status',
  'created_from',
  'created_to',
  'processed_from',
  'processed_to',
  'page',
  'items_on_page',
];

const FILTER_SCHEMA: Schema = {
  status: {
    optional: true,
    trim: true,
    custom: {
      options: (value) => {
        return isAddProgramRequestStatus(value);
      },
      errorMessage: 'Недопустимое значение.',
    },
  },
  created_from: {
    optional: true,
    isISO8601: {
      errorMessage: 'Должно быть строкой с датой в формате ISO8601.',
      bail: true,
    },
    toDate: true,
  },
  created_to: {
    optional: true,
    isISO8601: {
      errorMessage: 'Должно быть строкой с датой в формате ISO8601.',
      bail: true,
    },
    toDate: true,
  },
  processed_from: {
    optional: true,
    isISO8601: {
      errorMessage: 'Должно быть строкой с датой в формате ISO8601.',
      bail: true,
    },
    toDate: true,
  },
  processed_to: {
    optional: true,
    isISO8601: {
      errorMessage: 'Должно быть строкой с датой в формате ISO8601.',
      bail: true,
    },
    toDate: true,
  },
};

const REPORT_ATTRIBUTE: FilterAttributes[] = [
  'status',
  'created_to',
  'created_from',
];
const REPORT_SCHEMA: Schema = {
  status: {
    optional: true,
    trim: true,
    custom: {
      options: (value) => {
        return isAddProgramRequestStatus(value);
      },
      errorMessage: 'Недопустимое значение.',
    },
  },
  created_from: {
    optional: true,
    isISO8601: {
      errorMessage: 'Должно быть строкой с датой в формате ISO8601.',
      bail: true,
    },
    toDate: true,
  },
  created_to: {
    optional: true,
    isISO8601: {
      errorMessage: 'Должно быть строкой с датой в формате ISO8601.',
      bail: true,
    },
    toDate: true,
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

function rejectRequest() {
  return [
    validateIdParam(),
    checkValidKey(REJECTION_ATTRIBUTE, 'body'),
    checkSchema(REJECTION_SCHEMA, ['body']),
  ];
}

function completeRequest() {
  return [validateIdParam()];
}

function resetRequest() {
  return [validateIdParam()];
}

function filterRequest() {
  return [
    checkValidKey(FILTER_ATTRIBUTE, 'query', 'Недопустимый параметр'),
    checkSchema(FILTER_SCHEMA, ['query']),
    validatePaginationQuery(),
  ];
}

function reportRequest() {
  return [
    checkValidKey(REPORT_ATTRIBUTE, 'query', 'Недопустимый параметр'),
    checkSchema(REPORT_SCHEMA, ['query']),
  ];
}

export {
  createRequest,
  getAllRequest,
  getByIdRequest,
  rejectRequest,
  completeRequest,
  resetRequest,
  filterRequest,
  reportRequest,
};

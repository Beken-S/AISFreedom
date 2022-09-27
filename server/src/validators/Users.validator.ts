import { checkSchema, Schema } from 'express-validator';

import { User, UserCreationAttributes, Role } from '../models';

import checkValidKey from './checkValidKey';

type Attributes = keyof UserCreationAttributes;

const CREATION_ATTRIBUTES: Attributes[] = [
  'role',
  'name',
  'login',
  'email',
  'password',
];

const CREATION_SCHEMA: Schema = {
  role: {
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
        const role = await Role.findOne({ where: { name: value } });

        if (role == null) {
          throw new Error('Недопустимое значение.');
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
  },
  login: {
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
        const user = await User.findOne({ where: { login: value } });

        if (user != null) {
          throw new Error('Пользователь с таким логином уже существует.');
        }
      },
    },
  },
  email: {
    exists: {
      errorMessage: 'Отсутствует обязательное поле.',
      bail: true,
    },
    trim: true,
    isEmail: {
      errorMessage: 'Должно быть корректным email адресом.',
      bail: true,
    },
    custom: {
      options: async (value) => {
        const user = await User.findOne({ where: { email: value } });

        if (user != null) {
          throw new Error('Пользователь с такой почтой уже существует.');
        }
      },
    },
  },
  password: {
    exists: {
      errorMessage: 'Отсутствует обязательное поле.',
      bail: true,
    },
    trim: true,
    notEmpty: {
      errorMessage: 'Не может быть пустой строкой.',
      bail: true,
    },
    isLength: {
      options: { min: 8 },
      errorMessage: 'Не может быть меньше 8 символов.',
    },
  },
};

const LOGIN_ATTRIBUTES: Attributes[] = ['login', 'email', 'password'];
const LOGIN_SCHEMA: Schema = {
  login: {
    custom: {
      options: (value, { req }) => {
        if (value == null && req.body['email'] == null) {
          throw new Error('Должен быть указан login или email.');
        }

        return true;
      },
      bail: true,
    },
    optional: true,
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
  email: {
    custom: {
      options: (value, { req }) => {
        if (value == null && req.body['login'] == null) {
          throw new Error('Должен быть указан login или email.');
        }

        return true;
      },
      bail: true,
    },
    optional: true,
    trim: true,
    isEmail: {
      errorMessage: 'Должно быть корректным email адресом.',
      bail: true,
    },
  },
  password: {
    exists: {
      errorMessage: 'Отсутствует обязательное поле.',
      bail: true,
    },
    trim: true,
    notEmpty: {
      errorMessage: 'Не может быть пустой строкой.',
      bail: true,
    },
    isLength: {
      options: { min: 8 },
      errorMessage: 'Не может быть меньше 8 символов.',
    },
  },
};

function createRequest() {
  return [
    checkValidKey(CREATION_ATTRIBUTES, 'body'),
    checkSchema(CREATION_SCHEMA, ['body']),
  ];
}

function loginRequest() {
  return [
    checkValidKey(LOGIN_ATTRIBUTES, 'body'),
    checkSchema(LOGIN_SCHEMA, ['body']),
  ];
}

export { createRequest, loginRequest };

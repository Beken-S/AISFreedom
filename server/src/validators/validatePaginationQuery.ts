import { Schema, checkSchema } from 'express-validator';

const SCHEMA: Schema = {
  page: {
    optional: true,
    custom: {
      options: (value, { req }) => {
        if (req.query != null) {
          const pageExist = 'page' in req.query;
          const itemsOnPageExist = 'items_on_page' in req.query;

          return pageExist == itemsOnPageExist;
        }

        return true;
      },
      errorMessage: 'Не может использоваться без параметра items_on_page.',
    },
    isInt: {
      options: {
        min: 1,
      },
      errorMessage: 'Должен быть натуральным числом.',
    },
    toInt: true,
  },
  items_on_page: {
    optional: true,
    custom: {
      options: (value, { req }) => {
        if (req.query != null) {
          const pageExist = 'page' in req.query;
          const itemsOnPageExist = 'items_on_page' in req.query;

          return pageExist == itemsOnPageExist;
        }

        return true;
      },
      errorMessage: 'Не может использоваться без параметра page.',
    },
    isInt: {
      options: {
        min: 1,
      },
      errorMessage: 'Должен быть натуральным числом.',
    },
    toInt: true,
  },
};

function validatePaginationQuery() {
  return checkSchema(SCHEMA, ['query']);
}

export default validatePaginationQuery;

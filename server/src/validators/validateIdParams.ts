import { Schema, checkSchema } from 'express-validator';

const SCHEMA: Schema = {
  id: {
    isInt: {
      options: { min: 1 },
      errorMessage: 'Должен быть натуральным числом.',
    },
    toInt: true,
  },
};

function validateIdParam() {
  return checkSchema(SCHEMA, ['params']);
}

export default validateIdParam;

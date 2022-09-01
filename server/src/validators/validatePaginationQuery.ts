import { query } from 'express-validator';

function validatePaginationQuery() {
  return [
    query('page')
      .if(query('items_on_page').exists())
      .exists()
      .withMessage('Не может использоваться без параметра items_on_page.')
      .bail()
      .isInt({ min: 1 })
      .withMessage('Должен быть натуральным числом.')
      .bail()
      .toInt(),
    query('items_on_page')
      .if(query('page').exists())
      .exists()
      .withMessage('Не может использоваться без параметра page.')
      .bail()
      .isInt({ min: 1 })
      .withMessage('Должен быть натуральным числом.')
      .bail()
      .toInt(),
  ];
}

export default validatePaginationQuery;

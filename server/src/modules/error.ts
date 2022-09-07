import { ValidationError } from 'express-validator';

class BaseError extends Error {
  public status: number;

  constructor(status: number, message?: string) {
    super(message);

    this.status = status;
  }
}

class BadRequestError extends BaseError {
  constructor(message?: string) {
    super(400, message);
  }
}

class NotFoundError extends BaseError {
  constructor(message?: string) {
    super(404, message);
  }
}

class UnprocessableEntityError extends BaseError {
  public errors?: ValidationError[] | ValidationError;

  constructor(message?: string, errors?: ValidationError | ValidationError[]) {
    super(422, message);

    this.errors = errors;
  }
}

export { BaseError, BadRequestError, NotFoundError, UnprocessableEntityError };

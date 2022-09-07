import { Schema, ParamSchema } from 'express-validator';

function getOptionalSchema(schema: Schema, keys: string[]): Schema {
  const newSchema: Schema = keys.reduce((acc, key) => {
    const newKey: ParamSchema = {
      optional: true,
      ...schema[key],
    };

    delete newKey.exists;

    return { ...acc, [key]: newKey };
  }, {});
  return { ...schema, ...newSchema };
}

export default getOptionalSchema;

import { Optional } from 'sequelize';
import { Column, DataType, Model, Table, Scopes } from 'sequelize-typescript';

import { getPaginationOptions } from '../utils';

type NormativeDocumentAttributes = {
  id: number;
  form: string;
  name: string;
  creation_date: Date;
  number: string;
  file: string;
};

type NormativeDocumentCreationAttributes = Optional<
  NormativeDocumentAttributes,
  'id'
>;

@Scopes(() => ({
  orderById: {
    order: ['id'],
  },
  paginate: getPaginationOptions,
}))
@Table({
  tableName: 'normative_documents',
  timestamps: false,
})
class NormativeDocument extends Model<
  NormativeDocumentAttributes,
  NormativeDocumentCreationAttributes
> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  form!: string;

  @Column({
    type: DataType.STRING(1000),
    allowNull: false,
    unique: 'name',
    validate: {
      notEmpty: true,
    },
  })
  name!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    validate: {
      isDate: true,
    },
  })
  creation_date!: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  number!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  file!: string;
}

export default NormativeDocument;
export { NormativeDocumentAttributes, NormativeDocumentCreationAttributes };

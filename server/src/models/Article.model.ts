import { Optional } from 'sequelize';
import { Column, DataType, Model, Table, Scopes } from 'sequelize-typescript';

import { getPaginationOptions } from '../utils';

type ArticleAttributes = {
  id: number;
  name: string;
  author: string;
  publication_year: Date;
  file: string;
};

type ArticleCreationAttributes = Optional<ArticleAttributes, 'id'>;

@Scopes(() => ({
  orderById: {
    order: ['id'],
  },
  paginate: getPaginationOptions,
}))
@Table({
  tableName: 'articles',
  timestamps: false,
})
class Article extends Model<ArticleAttributes, ArticleCreationAttributes> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

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
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  author!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    validate: {
      isDate: true,
    },
    get() {
      return this.getDataValue('publication_year')?.getFullYear().toString();
    },
  })
  publication_year!: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  file!: string;
}

export default Article;
export { ArticleAttributes, ArticleCreationAttributes };

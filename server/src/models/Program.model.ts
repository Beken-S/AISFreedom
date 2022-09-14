import { Optional, Op, Sequelize } from 'sequelize';
import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
  Scopes,
} from 'sequelize-typescript';

import { ProgramSearchInOptions } from '../types';
import { getPaginationOptions } from '../utils';

import License from './License.model';
import ProgramType from './ProgramType.model';
import Source from './Source.model';

type ProgramAttributes = {
  id: number;
  program_type_id: number;
  license_id?: number | null;
  name: string;
  description?: string | null;
  developer?: string | null;
  home_page_url?: string | null;
  proprietary_counterparts?: string[] | null;
  logo?: string | null;
  images?: string[] | null;
  manual_url?: string | null;
  rating: number;
  number_of_ratings: number;
  sources: Source[];
};

type ProgramCreationAttributes = Optional<
  ProgramAttributes,
  'id' | 'rating' | 'sources'
>;

@Scopes(() => ({
  orderById: {
    order: ['id'],
  },
  includeSources: {
    include: {
      model: Source,
      as: 'sources',
      attributes: ['distrib_url', 'operation_system_id'],
      separate: true,
    },
  },
  searchIn: (
    query: string,
    options: ProgramSearchInOptions | ProgramSearchInOptions[]
  ) => {
    if (Array.isArray(options)) {
      return {
        where: {
          [Op.or]: options.map((option) => {
            if (option === 'proprietary_counterparts') {
              return Sequelize.where(
                Sequelize.fn(
                  'JSON_SEARCH',
                  Sequelize.fn('LOWER', Sequelize.col(option)),
                  'one',
                  Sequelize.literal(`"%${query}%"`)
                ),
                Op.ne,
                null
              );
            }
            return {
              [option]: { [Op.substring]: query },
            };
          }),
        },
      };
    }
    if (options === 'proprietary_counterparts') {
      return {
        where: {
          [Op.or]: Sequelize.where(
            Sequelize.fn(
              'JSON_SEARCH',
              Sequelize.fn('LOWER', Sequelize.col(options)),
              'one',
              Sequelize.literal(`"%${query}%"`)
            ),
            Op.ne,
            null
          ),
        },
      };
    }
    return {
      where: {
        [Op.or]: { [options]: { [Op.substring]: query } },
      },
    };
  },
  filterByOperationSystemId: (id: number) => ({
    include: {
      model: Source,
      as: 'filterByOperationSystemId',
      where: { operation_system_id: id },
      attributes: [],
    },
  }),
  filterByProgramTypeId: (id: number) => ({
    where: {
      [Op.and]: {
        program_type_id: id,
      },
    },
  }),
  paginate: getPaginationOptions,
}))
@Table({
  tableName: 'programs',
  timestamps: false,
})
class Program extends Model<ProgramAttributes, ProgramCreationAttributes> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ForeignKey(() => ProgramType)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    validate: { isInt: true, min: 1 },
  })
  program_type_id!: number;

  @ForeignKey(() => License)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    validate: { isInt: true, min: 1 },
  })
  license_id?: number | null;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: 'name',
    validate: {
      notEmpty: true,
    },
  })
  name!: string;

  @Column({ type: DataType.TEXT, validate: { notEmpty: true } })
  description?: string | null;

  @Column({ type: DataType.STRING, validate: { notEmpty: true } })
  developer?: string | null;

  @Column({
    type: DataType.STRING(2083),
    validate: {
      isUrl: true,
    },
  })
  home_page_url?: string | null;

  @Column({
    type: DataType.JSON,
  })
  proprietary_counterparts?: string[] | null;

  @Column({
    type: DataType.STRING,
    validate: {
      notEmpty: true,
    },
  })
  logo?: string | null;

  @Column({
    type: DataType.JSON,
  })
  images?: string[] | null;

  @Column({ type: DataType.STRING(2083), validate: { isUrl: true } })
  manual_url?: string | null;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    defaultValue: 0,
    get() {
      const rating = this.getDataValue('rating');
      const numberOfRatings = this.getDataValue('number_of_ratings');

      return numberOfRatings !== 0
        ? Number((rating / numberOfRatings).toFixed(1))
        : rating;
    },
  })
  rating!: number;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    defaultValue: 0,
  })
  number_of_ratings!: number;

  @BelongsTo(() => ProgramType)
  program_type!: ProgramType;

  @BelongsTo(() => License)
  license!: License;

  @HasMany(() => Source)
  sources!: Source[];

  @HasMany(() => Source, { as: 'filterByOperationSystemId' })
  filterByOperationSystemId!: Source[];
}

export default Program;
export { ProgramAttributes, ProgramCreationAttributes };

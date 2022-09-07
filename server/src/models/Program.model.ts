import { Optional, Op } from 'sequelize';
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
  sources: Source[];
};

type ProgramCreationAttributes = Optional<ProgramAttributes, 'id' | 'rating'>;

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
          [Op.or]: options.map((option) => ({
            [option]: { [Op.substring]: query },
          })),
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
    type: DataType.FLOAT(5),
    allowNull: false,
    defaultValue: 0,
    validate: {
      max: 5,
    },
  })
  rating!: number;

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

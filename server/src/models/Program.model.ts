import { Optional, ValidationError } from 'sequelize';
import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';

import License from './License.model';
import ProgramType from './ProgramType.model';
import Source from './Source.model';

type ProgramAttributes = {
  id: number;
  program_type_id: number;
  license_id: number;
  name: string;
  description?: string | null;
  developer?: string | null;
  home_page_url?: string | null;
  proprietary_counterparts?: string[] | null;
  logo?: string | null;
  images?: string[] | null;
  manual_url?: string | null;
  rating: number;
};

type ProgramCreationAttributes = Optional<ProgramAttributes, 'id' | 'rating'>;

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
  @Column(DataType.INTEGER.UNSIGNED)
  program_type_id!: number;

  @ForeignKey(() => License)
  @Column(DataType.INTEGER.UNSIGNED)
  license_id!: number;

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
    validate: {
      notEmptyItems(value: unknown) {
        if (Array.isArray(value) && value.includes('')) {
          throw new ValidationError('Сan not contain empty lines.', value);
        }
      },
    },
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
    validate: {
      notEmptyItems(value: unknown) {
        if (Array.isArray(value) && value.includes('')) {
          throw new ValidationError('Сan not contain empty lines.', value);
        }
      },
    },
  })
  images?: string | null;

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
  source!: Source[];
}

export default Program;
export { ProgramAttributes, ProgramCreationAttributes };

// import { Array, Record, Number, String, Static, Null } from 'runtypes';
// import { DataTypes, Model, ModelDefined } from 'sequelize';

// import Database from './Database';

// const ProgramAttributes = Record({
//   id: Number,
//   program_type_id: Number,
//   license_id: Number.Or(Null),
//   name: String.withConstraint((str) => str != ''),
//   description: String.Or(Null).withConstraint((str) => str != ''),
//   developer: String.Or(Null).withConstraint((str) => str != ''),
//   home_page_url: String.Or(Null).withConstraint((str) => str != ''),
//   proprietary_counterparts: Array(String).withConstraint(
//     (array) => !array.includes('')
//   ),
//   logo: String.Or(Null).withConstraint((str) => str != ''),
//   images: Array(String).withConstraint((array) => !array.includes('')),
//   manual_url: String.Or(Null).withConstraint((str) => str != ''),
// });

// type ProgramAttributes = Static<typeof ProgramAttributes>;

// const ProgramCreationAttributes = ProgramAttributes.omit('id');

// type ProgramCreationAttributes = Static<typeof ProgramCreationAttributes>;

// type ProgramModel = Model<ProgramAttributes, ProgramCreationAttributes>;

// type ProgramModelDefined = ModelDefined<
//   ProgramAttributes,
//   ProgramCreationAttributes
// >;

// const Program: ProgramModelDefined = Database.define(
//   'Program',
//   {
//     id: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: 'name',
//     },
//     description: {
//       type: DataTypes.TEXT,
//     },
//     developer: {
//       type: DataTypes.STRING,
//     },
//     home_page_url: {
//       type: DataTypes.STRING(2083),
//       validate: {
//         isUrl: true,
//       },
//     },
//     proprietary_counterparts: {
//       type: DataTypes.JSON,
//       allowNull: false,
//       defaultValue: [],
//     },
//     logo: {
//       type: DataTypes.STRING,
//     },
//     images: {
//       type: DataTypes.JSON,
//       allowNull: false,
//       defaultValue: [],
//     },
//     manual_url: {
//       type: DataTypes.STRING(2083),
//       validate: {
//         isUrl: true,
//       },
//     },
//     rating: {
//       type: DataTypes.INTEGER,
//     },
//   },
//   {
//     tableName: 'programs',
//     timestamps: false,
//   }
// );

// export default Program;
// export { ProgramAttributes, ProgramCreationAttributes, ProgramModel };

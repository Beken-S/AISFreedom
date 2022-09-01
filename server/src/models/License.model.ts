import { Optional, Op } from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

type LicenseAttributes = {
  id: number;
  acronym?: string | null;
  name?: string | null;
  text_url_eng: string;
  text_url_ru?: string | null;
};

type LicenseCreationAttributes = Optional<LicenseAttributes, 'id'>;

@Table({
  tableName: 'licenses',
  timestamps: false,
  indexes: [
    {
      unique: true,
      fields: ['acronym', 'name'],
      where: {
        acronym: {
          [Op.ne]: null,
        },
        name: {
          [Op.ne]: null,
        },
      },
    },
  ],
})
class License extends Model<LicenseAttributes, LicenseCreationAttributes> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    validate: {
      notEmpty: true,
    },
  })
  acronym?: string | null;

  @Column({
    type: DataType.STRING,
    validate: {
      notEmpty: true,
    },
  })
  name?: string | null;

  @Column({
    type: DataType.STRING(2083),
    allowNull: false,
    validate: {
      isUrl: true,
    },
  })
  text_url_eng!: string;

  @Column({
    type: DataType.STRING(2083),
    validate: {
      isUrl: true,
    },
  })
  text_url_ru!: string | null;
}

export default License;
export { LicenseAttributes, LicenseCreationAttributes };

// import { Record, Number, String, Static, Null } from 'runtypes';
// import { DataTypes, Model, ModelDefined, Op } from 'sequelize';

// import Database from './Database';

// const LicenseAttributes = Record({
//   id: Number,
//   acronym: String.Or(Null).withConstraint((str) => str != ''),
//   name: String.Or(Null).withConstraint((str) => str != ''),
//   text_url_eng: String.withConstraint((str) => str != ''),
//   text_url_ru: String.Or(Null).withConstraint((str) => str != ''),
// });

// type LicenseAttributes = Static<typeof LicenseAttributes>;

// const LicenseCreationAttributes = LicenseAttributes.omit('id');

// type LicenseCreationAttributes = Static<typeof LicenseCreationAttributes>;

// type LicenseModel = Model<LicenseAttributes, LicenseCreationAttributes>;

// type LicenseModelDefined = ModelDefined<
//   LicenseAttributes,
//   LicenseCreationAttributes
// >;

// const License: LicenseModelDefined = Database.define(
//   'License',
//   {
//     id: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     acronym: {
//       type: DataTypes.STRING,
//     },
//     name: {
//       type: DataTypes.STRING,
//     },
//     text_url_eng: {
//       type: DataTypes.STRING(2083),
//       allowNull: false,
//       validate: {
//         isUrl: true,
//       },
//     },
//     text_url_ru: {
//       type: DataTypes.STRING(2083),
//       validate: {
//         isUrl: true,
//       },
//     },
//   },
//   {
//     tableName: 'licenses',
//     timestamps: false,
//     indexes: [
//       {
//         unique: true,
//         fields: ['acronym', 'name'],
//         where: {
//           acronym: {
//             [Op.ne]: null,
//           },
//           name: {
//             [Op.ne]: null,
//           },
//         },
//       },
//     ],
//   }
// );

// export default License;
// export { LicenseAttributes, LicenseCreationAttributes, LicenseModel };

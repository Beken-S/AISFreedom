import { Optional, Op } from 'sequelize';
import {
  Column,
  CreatedAt,
  Model,
  Table,
  ForeignKey,
  DataType,
  BelongsTo,
  Scopes,
  Sequelize,
} from 'sequelize-typescript';

import { Department } from '../models';
import { getPaginationOptions } from '../utils';

type AddProgramsRequestAttributes = {
  id: number;
  department_id: number;
  programs_names: string[];
  adding_reason: string;
  username: string;
  user_position: string;
  user_email: string;
  user_phone?: string | null;
  is_rejected: boolean;
  comment?: string | null;
  is_completed: boolean;
  creation_date: Date;
  consider_before_date: Date;
  processed_date: Date | null;
  status: string;
};

type AddProgramsRequestCreationAttributes = Optional<
  AddProgramsRequestAttributes,
  | 'id'
  | 'is_rejected'
  | 'is_completed'
  | 'processed_date'
  | 'creation_date'
  | 'status'
>;

@Scopes(() => ({
  orderById: {
    order: ['id'],
  },
  orderByCreationDate: {
    order: ['creation_date'],
  },
  orderByStatus: {
    order: [
      Sequelize.fn(
        'if',
        Sequelize.where(
          Sequelize.fn(
            'datediff',
            Sequelize.col('consider_before_date'),
            new Date()
          ),
          Op.gt,
          0
        ),
        1,
        Sequelize.fn(
          'if',
          Sequelize.where(Sequelize.col('is_completed'), Op.eq, true),
          2,
          Sequelize.fn(
            'if',
            Sequelize.where(Sequelize.col('is_rejected'), Op.eq, true),
            3,
            4
          )
        )
      ),
    ],
  },
  filterByStatus: (status: string) => {
    switch (status) {
      case 'current':
        return {
          where: {
            [Op.and]: [
              Sequelize.where(
                Sequelize.fn(
                  'datediff',
                  Sequelize.col('consider_before_date'),
                  new Date()
                ),
                Op.gt,
                0
              ),
              {
                is_completed: false,
              },
              {
                is_rejected: false,
              },
            ],
          },
        };
      case 'expired':
        return {
          where: {
            [Op.and]: [
              Sequelize.where(
                Sequelize.fn(
                  'datediff',
                  Sequelize.col('consider_before_date'),
                  new Date()
                ),
                Op.lte,
                0
              ),
              {
                is_completed: false,
              },
              {
                is_rejected: false,
              },
            ],
          },
        };
      case 'completed':
        return {
          where: {
            is_completed: true,
          },
        };
      case 'rejected':
        return {
          where: {
            is_rejected: true,
          },
        };
      default:
        return {};
    }
  },
  filterByCreationDate: (from?: Date, to?: Date) => {
    if (from == null && to == null) return {};

    let filterOptions = {};

    if (from != null) {
      filterOptions = { [Op.gte]: from };
    }

    if (to != null) {
      filterOptions = { ...filterOptions, [Op.lte]: to };
    }

    return {
      where: {
        creation_date: { ...filterOptions },
      },
    };
  },
  filterByProcessingDate: (from?: Date, to?: Date) => {
    if (from == null && to == null) return {};

    let filterOptions = {};

    if (from != null) {
      filterOptions = { [Op.gte]: from };
    }

    if (to != null) {
      filterOptions = { ...filterOptions, [Op.lte]: to };
    }

    return {
      where: {
        processed_date: { ...filterOptions },
      },
    };
  },
  paginate: getPaginationOptions,
}))
@Table({
  tableName: 'add_programs_requests',
  updatedAt: false,
})
class AddProgramsRequest extends Model<
  AddProgramsRequestAttributes,
  AddProgramsRequestCreationAttributes
> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ForeignKey(() => Department)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    validate: { isInt: true, min: 1 },
  })
  department_id!: number;

  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  programs_names!: string[];

  @Column({
    type: DataType.STRING(1500),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  adding_reason!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  username!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  user_position!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  })
  user_email!: string;

  @Column({
    type: DataType.STRING(20),
    validate: {
      isNumeric: true,
    },
  })
  user_phone?: string | null;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_rejected!: boolean;

  @Column({
    type: DataType.STRING(1500),
    validate: {
      notEmpty: true,
    },
  })
  comment?: string | null;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_completed!: boolean;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    validate: {
      isDate: true,
    },
  })
  consider_before_date!: Date;

  @CreatedAt
  creation_date!: Date;

  @Column({
    type: DataType.DATE,
    validate: {
      isDate: true,
    },
  })
  processed_date!: Date | null;

  @Column({
    type: DataType.VIRTUAL,
    get() {
      const currentDate = Date.now();
      const considerBeforeDate = this.getDataValue(
        'consider_before_date'
      ).getTime();
      const isRejected = this.getDataValue('is_rejected');
      const isCompleted = this.getDataValue('is_completed');
      const isCurrent = considerBeforeDate - currentDate > 0;

      if (isRejected) {
        return 'Отклонена';
      } else if (isCompleted) {
        return 'Выполнена';
      } else if (isCurrent) {
        return 'На рассмотрении';
      } else {
        return 'Просрочено исполнение';
      }
    },
  })
  status!: string;

  @BelongsTo(() => Department)
  department!: Department;
}

export default AddProgramsRequest;
export { AddProgramsRequestAttributes, AddProgramsRequestCreationAttributes };

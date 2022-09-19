import formatDate from '../../utils/formatDate';
import { SET_APPLICATIONS, SET_ROW } from '../actions/Moderator-actions';

const initialState = {
  applications: [],
  row: [],
  itemsOnPage: 10,
};
const moderatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APPLICATIONS:
      return { ...state, applications: action.applications };
    case SET_ROW:
      return {
        ...state,
        row: state.applications.map((item) => [
          {
            'Номер заявки': item.id ? item.id : '',
            'Дата создания': item.creation_date
              ? formatDate(item.creation_date)
              : 'Нет данных',
            'Срок исполнения': item.processed_date
              ? formatDate(item.processed_date)
              : 'Нет данных',

            'Наименование программы': item.programs_names
              ? item.programs_names.join(' ,')
              : 'Нет данных',

            'Объект информатизации': item.programs_names ? '' : 'Нет данных',

            'ФИО пользователя': item.username ? item.username : 'Нет данных',

            Должность: item.user_position ? item.user_position : 'Нет данных',

            'Контактные данные': item.user_email
              ? item.user_email
              : 'Нет данных',

            Основание: item.adding_reason ? item.adding_reason : 'Нет данных',
            Статус: item.status ? item.status : 'Нет данных',
            Исполнена: item.status ? '' : 'Нет данных',

            Комментарий: item.comment ? item.comment : 'Нет данных',
          },
        ]),
      };
    default:
      return state;
  }
};

export default moderatorReducer;

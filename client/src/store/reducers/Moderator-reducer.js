import formatDate from '../../utils/formatDate';
import {
  IS_LOADING,
  SET_APPLICATIONS,
  SET_ROW,
  SET_STATUS,
} from '../actions/Moderator-actions';

const initialState = {
  applications: [],
  row: [],
  itemsOnPage: 10,
  isLoading: false,
  status: 'all',
};
const moderatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_APPLICATIONS:
      return { ...state, applications: action.applications };
    case SET_ROW:
      return {
        ...state,
        row: state.applications.map((item) => [
          {
            'Номер заявки': item.id ? item.id : '',
            'Дата создания/Срок исполнения': item.creation_date
              ? `${formatDate(item.creation_date)}
              ${formatDate(item.consider_before_date)}`
              : '-',
            'Наименование программы': item.programs_names
              ? item.programs_names.join(' ,')
              : '-',

            'Объект информатизации': item.programs_names ? '' : '-',

            'Данные пользователя': item.username
              ? `${item.username}
              ${item.user_position}
              ${item.user_email}
              ${item.user_phone}
            `
              : '',
            Основание: item.adding_reason ? item.adding_reason : '-',
            Статус: item.status ? item.status : '-',
            Исполнена: item.status ? `${formatDate(item.processed_date)}` : '-',

            Комментарий: item.comment ? item.comment : '-',
          },
        ]),
      };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export default moderatorReducer;

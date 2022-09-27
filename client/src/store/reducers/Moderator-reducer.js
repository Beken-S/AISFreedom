import formatDate from '../../utils/formatDate';
import {
  IS_LOADING,
  SET_APPLICATIONS,
  SET_CREATED_FROM,
  SET_CREATED_TO,
  SET_DEPARTMENTS,
  SET_ID,
  SET_ROW,
  SET_STATUS,
} from '../actions/Moderator-actions';

const initialState = {
  applications: [],
  row: [],
  itemsOnPage: 10,
  isLoading: false,
  status: 'all',
  created_from: '',
  created_to: '',
  id: null,
  departments: [],
};
const moderatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_APPLICATIONS:
      return {
        ...state,
        applications: action.applications,
        departments: action.departments,
      };
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

            'Объект информатизации': item.department_id
              ? state.departments
                  .filter((el) => el.id === item.department_id)
                  .map((e) => e.name)
                  .join('')
              : '-',

            'Данные пользователя': item.username
              ? `${item.username}
              ${item.user_position}
              ${item.user_email}
              ${item.user_phone}
            `
              : '',
            Основание: item.adding_reason ? item.adding_reason : '-',
            Статус: item.status ? item.status : '-',
            Исполнена: item.processed_date
              ? `${formatDate(item.processed_date)}`
              : '-',

            Комментарий: item.comment ? item.comment : '-',
          },
        ]),
      };
    case SET_STATUS:
      return { ...state, status: action.status };
    case SET_CREATED_FROM:
      return { ...state, created_from: action.date };
    case SET_CREATED_TO:
      return { ...state, created_to: action.date };
    case SET_ID:
      return { ...state, id: action.id };
    case SET_DEPARTMENTS:
      return { ...state, departments: action.departments };
    default:
      return state;
  }
};

export default moderatorReducer;

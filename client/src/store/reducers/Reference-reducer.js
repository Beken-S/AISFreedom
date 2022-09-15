import {
  SET_LICENSES,
  SET_ITEM,
  IS_LOADING,
  SET_ERROR,
  SET_NORMATIVE,
  SET_ARTICLES,
} from '../actions/Reference-actions';

const initialState = {
  licenses: [],
  normative: [
    {
      form: 'Федеральный закон',
      name: 'Часть четвертая Гражданского кодекса Российской Федерации (статьи 1259, 1261, 1286, 1286.1 )',
      data: '2006-12-18',
      number: '№ 230',
      file: '8bbd8b22-bbe5-46a9-b8c5-77396034f1bc.pdf',
    },
    {
      form: 'Постановление правительства',
      name: 'Об установлении запрета на допуск программного обеспечения происходящего из иностранных государств, для целей осуществления закупок для обеспечения государственных и муниципальных нужд.',
      data: '2015-11-16',
      number: '№ 1236',
      file: 'cdaabbe2-33bb-44b8-9fc0-44a8eed1a456.pdf',
    },
    {
      form: 'Приказ Министерства связи и массовых коммуникаций',
      name: 'Об утверждении Методических рекомендаций по использованию свободного программного обеспечения в деятельности федеральных органов исполнительной власти, включая критерии определения государственных информационных систем, при создании которых необходимо использовать свободное программное обеспечение, в том числе государственных информационных систем, предназначенных для оказания государственных и муниципальных услуг в электронном виде.',
      data: '2015-08-19',
      number: '№ 305',
      file: 'bc12c528-b480-4a26-87a0-8ec5e30fc08c.pdf',
    },
    {
      form: 'Приказ Министерства цифрового развития, связи и массовых коммуникаций РФ',
      name: 'Об импортозамещении цифровых решений в органах управления Российской Федерации.',
      data: '2022-01-04',
      number: 'МШ-П8-1-070-14732',
      file: '3d4a6f76-1795-4480-babe-c8ab770259f2.pdf',
    },
    {
      form: 'ГОСТ ',
      name: 'Информационные технологии. Свободное программное обеспечение. Общие положения.',
      data: '2012-01-01',
      number: 'МШ-П8-1-070-14732',
      file: 'a892612c-de4e-4453-89b0-4dd7f7e30361.pdf',
    },
  ],
  articles: [],
  itemsOnPage: 10,
  item: {},
  isLoading: false,
  error: '',
};

const referenceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LICENSES:
      return {
        ...state,
        licenses: action.licenses,
        error: '',
      };
    case SET_NORMATIVE:
      return {
        ...state,
        normative: action.normative,
        error: '',
      };
    case SET_ARTICLES:
      return {
        ...state,
        articles: action.articles,
        error: '',
      };
    case SET_ITEM:
      return {
        ...state,
        item: action.item,
      };

    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case SET_ERROR: {
      return { ...state, error: action.error };
    }

    default:
      return state;
  }
};

export default referenceReducer;

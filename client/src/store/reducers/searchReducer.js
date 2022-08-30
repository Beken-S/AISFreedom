import {
  FILTER_SEARCH,
  SET_IS_ARCHIVER,
  SET_IS_GRAPHIC,
  SET_IS_LINUX,
  SET_IS_TEXT,
  SET_IS_WINDOWS,
  RESET_SEARCH,
  SEARCH_ANALOGS,
  SET_PROGRAM,
  SET_ITEM,
} from '../actions/searchActions';
import { filterOfChecked } from '../helpers/filterOfClasses&os';

import zip from '@assets/icon/7-zip_icon.png';
import gimp from '@assets/icon/gimp_icon.png';
import krita from '@assets/icon/krita_icon.png';
import libreoffice from '@assets/icon/libreoffice_Writer_icon.png';
import openoffice from '@assets/icon/openoffice_Writer_icon.png';
import paint from '@assets/icon/paint-net_icon.png';
import peazip from '@assets/icon/peazip_icon.png';
import pinta from '@assets/icon/pinta_icon.png';

const initialState = {
  paidSoft: [
    { name: 'Adobe Photoshop', type: 'Редакторы графики' },
    { name: 'WinRar', type: 'Архиваторы файлов' },
    { name: 'Microsoft Word', type: 'Текстовые редакторы' },
  ],
  freeSoft: [
    {
      id: 1,
      name: 'GIMP',
      type: 'Редакторы графики',
      img: gimp,
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆ ☆',
    },
    {
      id: 2,
      name: 'Pinta',
      type: 'Редакторы графики',
      img: pinta,
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆ ☆',
    },
    {
      id: 3,
      name: 'Paint.NET',
      type: 'Редакторы графики',
      img: paint,
      os: 'Windows',
      raiting: '☆ ☆ ☆',
    },
    {
      id: 4,
      name: 'Krita',
      type: 'Редакторы графики',
      img: krita,
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆ ☆',
    },
    {
      id: 5,
      name: '7-Zip',
      img: zip,
      type: 'Архиваторы файлов',
      raiting: '☆ ☆ ☆ ☆',
    },
    {
      id: 6,
      name: 'PeaZip',
      img: peazip,
      type: 'Архиваторы файлов',
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆ ☆',
    },
    {
      id: 7,
      name: 'Bandizip',
      type: 'Архиваторы файлов',
    },
    { id: 8, name: 'Hamster ZIP', type: 'Архиваторы файлов' },
    { id: 9, name: 'IZArc', type: 'Архиваторы файлов' },
    {
      id: 10,
      name: 'LibreOffice',
      img: libreoffice,
      type: 'Текстовые редакторы',
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆ ☆ ☆',
    },
    {
      id: 11,
      name: 'OpenOffice',
      type: 'Текстовые редакторы',
      img: openoffice,
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆',
    },
  ],
  filtered: [
    {
      id: 1,
      name: 'GIMP',
      type: 'Редакторы графики',
      img: gimp,
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆ ☆',
    },
    {
      id: 2,
      name: 'Pinta',
      type: 'Редакторы графики',
      img: pinta,
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆ ☆',
    },
    {
      id: 3,
      name: 'Paint.NET',
      type: 'Редакторы графики',
      img: paint,
      os: 'Windows',
      raiting: '☆ ☆ ☆',
    },
    {
      id: 4,
      name: 'Krita',
      type: 'Редакторы графики',
      img: krita,
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆ ☆',
    },
    {
      id: 5,
      name: '7-Zip',
      img: zip,
      type: 'Архиваторы файлов',
      raiting: '☆ ☆ ☆ ☆',
    },
    {
      id: 6,
      name: 'PeaZip',
      img: peazip,
      type: 'Архиваторы файлов',
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆ ☆',
    },
    {
      id: 7,
      name: 'Bandizip',
      type: 'Архиваторы файлов',
    },
    { id: 8, name: 'Hamster ZIP', type: 'Архиваторы файлов' },
    { id: 9, name: 'IZArc', type: 'Архиваторы файлов' },
    {
      id: 10,
      name: 'LibreOffice',
      img: libreoffice,
      type: 'Текстовые редакторы',
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆ ☆ ☆',
    },
    {
      id: 11,
      name: 'OpenOffice',
      type: 'Текстовые редакторы',
      img: openoffice,
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆',
    },
  ],
  programs: [],
  item: {},
  currentPage: 1,
  totalCountPages: null,
  isGraphic: false,
  isArchiver: false,
  isText: false,
  isLinux: true,
  isWindows: true,
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ANALOGS:
      return {
        ...state,
        filtered: state.programs.filter((f) => f.type === action.payload),
      };
    case RESET_SEARCH:
      return {
        ...state,
        filtered: [...state.programs],
        isGraphic: false,
        isArchiver: false,
        isText: false,
        isLinux: true,
        isWindows: true,
      };
    case FILTER_SEARCH:
      return {
        ...state,
        filtered: filterOfChecked(
          state.freeSoft,
          action.filtersOfType,
          action.filtersOfOs
        ),
      };
    case SET_IS_GRAPHIC:
      return {
        ...state,
        isGraphic: action.check,
      };
    case SET_IS_ARCHIVER:
      return {
        ...state,
        isArchiver: action.check,
      };
    case SET_IS_TEXT:
      return {
        ...state,
        isText: action.check,
      };
    case SET_IS_LINUX:
      return {
        ...state,
        isLinux: action.check,
      };
    case SET_IS_WINDOWS:
      return {
        ...state,
        isWindows: action.check,
      };
    case SET_PROGRAM:
      return {
        ...state,
        programs: action.programs,
        filtered: action.programs,
        totalCountPages: action.totalCountPages,
        currentPage: action.currentPage,
      };
    case SET_ITEM:
      return {
        ...state,
        item: action.item,
      };
    default:
      return state;
  }
};

export default searchReducer;

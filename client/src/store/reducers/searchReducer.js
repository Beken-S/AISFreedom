import {
  FILTER_SEARCH,
  SET_IS_ARCHIVER,
  SET_IS_GRAPHIC,
  SET_IS_LINUX,
  SET_IS_TEXT,
  SET_IS_WINDOWS,
  RESET_SEARCH,
  SEARCH_ANALOGS,
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
      name: 'GIMP',
      type: 'Редакторы графики',
      img: gimp,
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆ ☆',
    },
    {
      name: 'Pinta',
      type: 'Редакторы графики',
      img: pinta,
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆ ☆',
    },
    {
      name: 'Paint.NET',
      type: 'Редакторы графики',
      img: paint,
      os: 'Windows',
      raiting: '☆ ☆ ☆',
    },
    {
      name: 'Krita',
      type: 'Редакторы графики',
      img: krita,
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆ ☆',
    },
    { name: '7-Zip', img: zip, type: 'Архиваторы файлов', raiting: '☆ ☆ ☆ ☆' },
    {
      name: 'PeaZip',
      img: peazip,
      type: 'Архиваторы файлов',
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆ ☆',
    },
    { name: 'Bandizip', type: 'Архиваторы файлов' },
    { name: 'Hamster ZIP', type: 'Архиваторы файлов' },
    { name: 'IZArc', type: 'Архиваторы файлов' },
    {
      name: 'LibreOffice',
      img: libreoffice,
      type: 'Текстовые редакторы',
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆ ☆ ☆',
    },
    {
      name: 'OpenOffice',
      type: 'Текстовые редакторы',
      img: openoffice,
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆',
    },
  ],
  filtered: [
    {
      name: 'GIMP',
      type: 'Редакторы графики',
      img: gimp,
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆ ☆',
    },
    {
      name: 'Pinta',
      type: 'Редакторы графики',
      img: pinta,
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆ ☆',
    },
    {
      name: 'Paint.NET',
      type: 'Редакторы графики',
      img: paint,
      os: 'Windows',
      raiting: '☆ ☆ ☆',
    },
    {
      name: 'Krita',
      type: 'Редакторы графики',
      img: krita,
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆ ☆',
    },
    { name: '7-Zip', img: zip, type: 'Архиваторы файлов', raiting: '☆ ☆ ☆ ☆' },
    {
      name: 'PeaZip',
      img: peazip,
      type: 'Архиваторы файлов',
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆ ☆',
    },
    { name: 'Bandizip', type: 'Архиваторы файлов' },
    { name: 'Hamster ZIP', type: 'Архиваторы файлов' },
    { name: 'IZArc', type: 'Архиваторы файлов' },
    {
      name: 'LibreOffice',
      img: libreoffice,
      type: 'Текстовые редакторы',
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆ ☆ ☆',
    },
    {
      name: 'OpenOffice',
      type: 'Текстовые редакторы',
      img: openoffice,
      os: 'Windows, Linux',
      raiting: '☆ ☆ ☆',
    },
    { name: 'Microsoft Word', type: 'Текстовые редакторы' },
  ],
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
        filtered: state.freeSoft.filter((f) => f.type === action.payload),
      };
    case RESET_SEARCH:
      return {
        ...state,
        filtered: [...state.freeSoft],
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
    default:
      return state;
  }
};

export default searchReducer;

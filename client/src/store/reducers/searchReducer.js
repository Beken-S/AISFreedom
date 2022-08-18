import gimp from '@assets/img/GIMP.jpg';
import krita from '@assets/img/Krita.jpg';
import paint from '@assets/img/paint_net.jpg';
import pinta from '@assets/img/pinta.jpg';
import { RESET_SEARCH, SEARCH_ANALOGS } from '@store/actions/searchActions';

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
      downloads: '54',
    },
    {
      name: 'Pinta',
      type: 'Редакторы графики',
      img: pinta,
      os: 'Windows, Linux',
      downloads: '20',
    },
    {
      name: 'Paint.NET',
      type: 'Редакторы графики',
      img: paint,
      os: 'Windows',
      downloads: '37',
    },
    {
      name: 'Krita',
      type: 'Редакторы графики',
      img: krita,
      os: 'Windows, Linux',
      downloads: '10',
    },
    { name: '7-Zip', type: 'Архиваторы файлов' },
    { name: 'PeaZip', type: 'Архиваторы файлов' },
    { name: 'Bandizip', type: 'Архиваторы файлов' },
    { name: 'Hamster ZIP', type: 'Архиваторы файлов' },
    { name: 'IZArc', type: 'Архиваторы файлов' },
    { name: 'LibreOffice Writer', type: 'Текстовые редакторы' },
    { name: 'OpenOffice Writer', type: 'Текстовые редакторы' },
    { name: 'Microsoft Word', type: 'Текстовые редакторы' },
  ],
  filtered: [],
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
        filtered: [],
      };
    default:
      return state;
  }
};

export default searchReducer;

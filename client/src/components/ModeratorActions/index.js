import React from 'react';
import { useDispatch } from 'react-redux';

import '../../App.scss';
import {
  getApplications,
  reportApplications,
} from '../../store/thunks/Moderator-thunks';

export const ModeratorActions = () => {
  const dispatch = useDispatch();
  const reset = () => {
    dispatch(getApplications());
  };
  const report = () => {
    dispatch(reportApplications());
  };
  return (
    <div className="wrap">
      <div className="service-form-submit">
        <input
          type="submit"
          className="form-submit"
          value="Сбросить"
          onClick={reset}
        />
        <input type="submit" className="form-submit" value="Закрыть" />
        <input type="submit" className="form-submit" value="Отменить" />
        <input
          type="submit"
          className="form-submit"
          value="Скачать отчёт"
          onClick={report}
        />
      </div>
    </div>
  );
};

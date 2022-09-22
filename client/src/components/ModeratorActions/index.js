import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../App.scss';
import {
  completeApplication,
  rejectApplication,
  resetApplication,
} from '../../store/thunks/Moderator-thunks';

export const ModeratorActions = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.moderator.status);
  const created_from = useSelector((state) => state.moderator.created_from);
  const created_to = useSelector((state) => state.moderator.created_to);

  const reportUrl = `/api/requests/report/${
    status === 'all'
      ? ''
      : `${status !== 'all' ? `?status=${status}` : ''}${
          created_from !== '' ? `&created_from=${created_from}` : ''
        }${created_to !== '' ? `&created_to=${created_to}` : ''}`
  }`;

  const reset = () => {
    dispatch(resetApplication());
  };
  const complete = () => {
    dispatch(completeApplication());
  };
  const reject = () => {
    dispatch(rejectApplication());
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
        <input
          onClick={complete}
          type="submit"
          className="form-submit"
          value="Закрыть"
        />
        <input
          onClick={reject}
          type="submit"
          className="form-submit"
          value="Отменить"
        />
        <a
          style={{ color: 'white' }}
          target="_blank"
          rel="noreferrer"
          href={`http://localhost:3001${reportUrl}`}
        >
          <button className="form-submit" type="button">
            Отчёт
          </button>{' '}
        </a>
      </div>
    </div>
  );
};

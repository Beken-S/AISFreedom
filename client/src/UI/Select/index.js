import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDepartments } from '../../store/thunks/Reference-thunks';
import ShowError from '../ShowError';

// import style from './Select.module.scss';

export default function Select({
  list,
  defaultValue,
  mode = 'default',
  id,
  required,
  onBlur = () => {},
  onChange = () => {},
  text = '',
  formError,
  refInput = null,
}) {
  const dispatch = useDispatch();
  const departments = useSelector(({ reference }) => reference.departments);

  useEffect(() => {
    dispatch(getDepartments());
  }, []);

  return (
    <>
      {mode === 'default' && (
        <div>
          <label htmlFor="">{text}</label>
          <select
            className="form-select"
            id={id}
            onChange={onChange}
            onBlur={onBlur}
          >
            <option key={0} value="Выберите объект информатизации">
              Выберите объект информатизации
            </option>

            {departments &&
              departments.map((item) => (
                <option
                  key={item.id}
                  value={item.id}
                  defaultValue={defaultValue === item.id ? true : false}
                >
                  {item.name}
                </option>
              ))}
          </select>
          <ShowError form={formError} name={id} />
        </div>
      )}
    </>
  );
}

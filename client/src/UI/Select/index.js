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
  return (
    <>
      {mode === 'default' && (
        <div>
          <label htmlFor="">{text}</label>
          <select
            class="form-select"
            id={id}
            onChange={onChange}
            onBlur={onBlur}
          >
            <option key={0} value="Выберите объект информатизации">
              Выберите объект информатизации
            </option>
            <option
              key={1}
              value="1"
              defaultValue={defaultValue === '1' ? true : false}
            >
              Кафедра № 2 Математики
            </option>
            <option
              key={2}
              defaultValue={defaultValue === '2' ? true : false}
              value="2"
            >
              Кафедра № 2 Физики
            </option>
            <option
              key={3}
              defaultValue={defaultValue === '3' ? true : false}
              value="3"
            >
              Кафедра № 3 Химии
            </option>
          </select>
          <ShowError form={formError} name={id} />
        </div>
      )}
    </>
  );
}

import ShowError from '../ShowError';

import style from './Input.module.scss';

export default function Input({
  type = '',
  value = '',
  defaultValue = '',
  mode = 'default',
  placeholder,
  id = '',
  onBlur = () => {},
  onChange = () => {},
  text = '',
  required,
  showError = true,
  formError,
}) {
  return (
    <>
      {mode === 'default' && (
        <div className="input-wrapper">
          <label htmlFor="">
            {text} <span>{required ? '*' : ''}</span>
          </label>
          <input
            type={type}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            id={id}
          />
          {showError && <ShowError form={formError} name={id} />}
        </div>
      )}
      {mode === 'login' && (
        <>
          <input
            className={style.fadeIn}
            type={type}
            placeholder={placeholder}
            onBlur={onBlur}
            onChange={onChange}
            id={id}
          />
          {showError && <ShowError form={formError} name={id} />}
        </>
      )}
      {mode === 'login_passwordToggle' && (
        <>
          <input
            type={type}
            className={style.fadeIn}
            placeholder={placeholder}
            onBlur={onBlur}
            onChange={onChange}
            id={id}
          />
          {showError && <ShowError form={formError} name={id} />}
        </>
      )}
      {mode === 'ask' && (
        <>
          <input
            type={type}
            className="form-control"
            placeholder={placeholder}
            onBlur={onBlur}
            onChange={onChange}
            id={id}
          />
          {showError && <ShowError form={formError} name={id} />}
        </>
      )}
    </>
  );
}

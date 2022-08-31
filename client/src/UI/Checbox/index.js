import style from './Checbox.module.scss';

export default function Checbox({
  text,
  onChange = () => {},
  checked = null,
  required,
  onBlur = () => {},
  id,
}) {
  return (
    <div className={style.checkboxInput}>
      {checked !== null && (
        <input
          className={style.input}
          type="checkbox"
          checked={checked}
          id={id}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
      {checked === null && (
        <input type="checkbox" id={id} onChange={onChange} onBlur={onBlur} />
      )}
      <div>{text}</div>
    </div>
  );
}

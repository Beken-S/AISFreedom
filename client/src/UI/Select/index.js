import style from './Select.module.scss';

export default function Select({
  list,
  defaultValue,
  mode = 'default',
  id,
  required,
  onBlur = () => {},
  onChange = () => {},
  text = '',
  refInput = null,
}) {
  const setOptions = () => {
    return list.map((item, index) => {
      return (
        <option
          key={index}
          selected={defaultValue === item.title ? true : false}
          value={item.title ? item.id : item.title}
        >
          {item.title}
        </option>
      );
    });
  };

  return (
    <>
      {mode === 'default' && (
        <div className={style.select__wrapper}>
          <label htmlFor="">{text}</label>
          <select id={id} onChange={onChange} onBlur={onBlur} ref={refInput}>
            {setOptions()}
          </select>
        </div>
      )}
    </>
  );
}

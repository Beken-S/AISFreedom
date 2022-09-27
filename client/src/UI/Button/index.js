import style from './Button.module.scss';

export default function Button({
  color,
  size,
  callback = () => {},
  type = 'button',
  text,
}) {
  const buttonClassName = () => {
    switch (color) {
      case 'blue':
        return 'button button_blue';
      case 'green':
        return 'button button_green';
      case 'red':
        return 'button button_red';
      case 'gray':
        return 'button button_gray';
      default:
        return 'button button_blue';
    }
  };
  return (
    <>
      <button type={type} className={style.fadeIn} onClick={callback}>
        {text}
      </button>
    </>
  );
}

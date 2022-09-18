import { notification } from 'antd';
import 'antd/dist/antd.css';

export default ({ text, type = 'info', title, duration = 5 }) =>
  notification[type]({
    message: title,
    description: text,
    duration: duration,
  });

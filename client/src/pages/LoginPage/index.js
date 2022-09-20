import { useFormik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import Button from '../../UI/Button';
import Input from '../../UI/Input';

import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  // const tokenDispatch = useDispatch()

  //   const setToken = async (tokenItem) =>{
  //       tokenDispatch(token(tokenItem))
  //   }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required('Неверный адрес электронной почты'),
      password: Yup.string().required('Введите пароль'),
    }),
    onSubmit: async (values) => {
      console.log(values);
      // const responce = await HTTP.getLogin(REQUEST_URL.login, values);
      // if (responce.auth_token) {
      //   await setToken(responce.auth_token);
      //   navigate('/');
      // } else {
      //   setErrors([...responce.non_field_errors]);
      // }
    },
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.formContent}>
            <p className={styles.text}> Авторизация </p>

            <form onSubmit={formik.handleSubmit}>
              <Input
                mode="login"
                type="text"
                placeholder="Email"
                id="email"
                {...formik.getFieldProps('email')}
                formError={formik}
                value={formik.values.email}
              />
              <Input
                mode="login_passwordToggle"
                placeholder="Пароль"
                type="password"
                id="password"
                {...formik.getFieldProps('password')}
                formError={formik}
                value={formik.values.password}
              />
              <Button type="submit" text="Войти" />
            </form>
            <div className={styles.formFooter}>
              <NavLink className={styles.link} to="/">
                Забыли пароль?
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

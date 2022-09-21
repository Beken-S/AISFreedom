import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';

import Button from '../../UI/Button';
import Input from '../../UI/Input';

import styles from './LoginPage.module.scss';

import { selectAuthErrors } from '@store/selectors/Auth-selectors';
import { fetchLogin } from '@store/thunks/Auth-thunks';

const LoginPage = () => {
  const dispatch = useDispatch();
  const errors = useSelector(selectAuthErrors);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required('Неверный адрес электронной почты'),
      password: Yup.string()
        .test('len', 'Пароль не может быть меньше 8 символов', (value) => {
          if (value == null) return true;
          return value.length >= 8;
        })
        .required('Введите пароль'),
    }),
    onSubmit: async (values) => {
      dispatch(fetchLogin(values));
    },
  });

  useEffect(() => {
    formik.setErrors(errors);
  }, [errors]);

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

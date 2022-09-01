import { useFormik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import Button from '../../UI/Button';
import Input from '../../UI/Input';

import styles from './RegistrationPage.module.scss';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [registrationErrors, setRegistrationErrors] = useState([]);
  const [errors, setErrors] = useState([]);

  const password_REG_Exp = /(?=.*[0-9])(?=.*[A-z])/g;

  // const tokenDispatch = useDispatch()

  //   const setToken = async (tokenItem) =>{
  //       tokenDispatch(token(tokenItem))
  //   }

  const formikCreate = useFormik({
    initialValues: {
      email: '',
      password: '',
      re_password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Введите корректный email')
        .required('Введите email'),
      password: Yup.string()
        .min(8, 'Пароль должен содержать не менее 8 символов')
        .matches(password_REG_Exp, 'Пароль должен содержать буквы и цифры')
        .required('Введите пароль'),
      re_password: Yup.string()
        .required('Повторите пароль')
        .min(8, 'Минимальный пароль 8 символов')
        .oneOf([Yup.ref('password')], 'Пароли должны совпадать'),
    }),
    onSubmit: async (values) => {
      console.log(values);
      await setSubmitInfo(values);
      // const responce = await HTTP.getLogin(REQUEST_URL.login, values);
      // if (responce.auth_token) {
      //   await setToken(responce.auth_token);
      //   navigate('/');
      // } else {
      //   setErrors([...responce.non_field_errors]);
      // }
    },
  });

  async function setSubmitInfo(values) {
    //console.log('values', values)
    const formData = new FormData();
    for (let item of Object.entries(values)) {
      formData.append(item[0], item[1]);
    }

    //const responce = await HTTP.createUser(REQUEST_URL.createUser, formData);
    //console.log(responce);
    // if (responce.id) {
    //   navigate('/');
    // } else {
    //   // console.log(responce)
    //   setRegistrationErrors(responce);
    // }
  }

  const showRegistrationErrors = (errors) => {
    let errorsArray = [];
    for (let error in errors) {
      errorsArray.push(errors[error]);
    }
    return errorsArray.map((item, index) => {
      return <div key={index}>{item}</div>;
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.formContent}>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? 'rgb(50, 129, 226)' : '',
                transitionDuration: isActive ? '0.6s' : '',
                textDecoration: isActive ? 'underline' : '',
              })}
              className={styles.link}
              to="/login"
            >
              ВОЙТИ
            </NavLink>
            <p className={styles.text}>
              <NavLink
                style={({ isActive }) => ({
                  fontWeight: isActive ? '600' : '',
                  color: isActive ? 'rgb(0, 0, 0)' : '',
                  transitionDuration: isActive ? '0.6s' : '',
                })}
                className={styles.link}
                to="/registration"
              >
                Регистрация
              </NavLink>
            </p>

            <form onSubmit={formikCreate.handleSubmit}>
              <Input
                mode="login"
                type="text"
                placeholder="Email"
                id="email"
                {...formikCreate.getFieldProps('email')}
                formError={formikCreate}
                value={formikCreate.values.email}
              />
              <Input
                mode="login_passwordToggle"
                placeholder="Пароль"
                type="password"
                id="password"
                {...formikCreate.getFieldProps('password')}
                formError={formikCreate}
              />
              <Input
                mode="login_passwordToggle"
                placeholder="Повторите пароль"
                type="password"
                id="password"
                {...formikCreate.getFieldProps('re_password')}
                formError={formikCreate}
              />
              <Button type="submit" text="Войти" />
              <div className="reg__content-error">
                {showRegistrationErrors(registrationErrors)}
              </div>
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

export default RegistrationPage;

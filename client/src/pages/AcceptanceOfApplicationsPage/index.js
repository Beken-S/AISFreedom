import cn from 'classnames';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import Input from '../../UI/Input/index';

import styles from './AcceptanceOfApplicationsPage.module.scss';

const AcceptanceOfApplicationsPage = () => {
  const phone_REG_EXP = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  const navigate = useNavigate();

  const formikCreate = useFormik({
    initialValues: {
      department_id: '',
      programs_names: '',
      adding_reason: '',
      username: '',
      user_position: '',
      email: '',
      phone_number: '',
    },
    validationSchema: Yup.object({
      programs_names: Yup.string().required('Введите наименования программ'),
      adding_reason: Yup.string().required(
        'Введите основание для включения в базу'
      ),
      username: Yup.string().required('Введите имя'),
      user_position: Yup.string().required('Введите должность'),
      email: Yup.string()
        .email('Введите корректный email')
        .required('Введите email'),
      phone_number: Yup.string()
        .matches(phone_REG_EXP, 'Введите правильный номер')
        .required('Укажите номер телефона'),
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
    console.log('new user', formData);
    for (let item of Object.entries(values)) {
      formData.append(item[0], item[1]);
    }
    //const responce = await HTTP.createUser(REQUEST_URL.createUser, formData);
    console.log('formData', formData);
    // console.log('responce', responce);
    // if (responce.id) {
    // //   openNotification({
    // //     title: 'Регистрация',
    // //     text: 'Регистрация успешно выполнена',
    // //     type: 'success',
    // //   });
    // //   navigate('/');
    // // } else {
    // //   // console.log(responce)
    // //   openNotification({
    // //     title: 'Регистрация',
    // //     text: 'Регистрация не выполнена',
    // //     type: 'error',
    // //   });
    // //   setRegistrationErrors(responce);
    // }
  }

  return (
    <div className={styles.AcceptanceOfApplicationsPage}>
      <h2>ПРИЕМ ЗАЯВОК</h2>
      <form onSubmit={formikCreate.handleSubmit}>
        <select
          class="form-select"
          {...formikCreate.getFieldProps('department_id')}
          formError={formikCreate}
        >
          <option selected>Выберете объект информатизации</option>
          <option value="1">Кафедра № 1 Математики</option>
          <option value="2">Кафедра № 2 Физики</option>
          <option value="3">Кафедра № 3 Химии</option>
        </select>
        <br />
        <div className={cn(styles.input__item)}>
          <Input
            mode="ask"
            id="programs_names"
            type="text"
            placeholder="Введите наменование программ через запятую"
            {...formikCreate.getFieldProps('programs_names')}
            formError={formikCreate}
          />
        </div>
        <br />
        <div className={cn(styles.input__item)}>
          <Input
            mode="ask"
            id="adding_reason"
            type="text"
            placeholder="Введите основание для включения в базу"
            {...formikCreate.getFieldProps('adding_reason')}
            formError={formikCreate}
          />
        </div>
        <br />
        <div className={cn(styles.input__item)}>
          <Input
            mode="ask"
            id="username"
            type="text"
            placeholder="Введите Фамилию Имя Отчетсво"
            {...formikCreate.getFieldProps('username')}
            formError={formikCreate}
          />
        </div>
        <br />
        <div className={cn(styles.input__item)}>
          <Input
            mode="ask"
            id="user_position"
            type="text"
            class="form-control"
            placeholder="Введите должность"
            {...formikCreate.getFieldProps('user_position')}
            formError={formikCreate}
          />
        </div>
        <br />
        <div className={cn(styles.input__item)}>
          <Input
            mode="ask"
            id="email"
            type="email"
            class="form-control"
            placeholder="ВведитеE-mail"
            {...formikCreate.getFieldProps('email')}
            formError={formikCreate}
          />
        </div>
        <br />
        <div className={cn(styles.input__item)}>
          <Input
            mode="ask"
            type="text"
            id="phone_number"
            {...formikCreate.getFieldProps('phone_number')}
            formError={formikCreate}
            placeholder="Введите контактный номер телефона"
            mask={'+7(999) 999-99-99'}
          />
        </div>
        <br />
        <div class="service-form-submit">
          <input type="submit" class="form-submit" value="Отправить" />
          <input type="submit" class="form-submit" value="Сбросить" />
        </div>
      </form>
    </div>
  );
};

export default AcceptanceOfApplicationsPage;

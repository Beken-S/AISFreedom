import cn from 'classnames';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import openNotification from '../../components/MessagePopup';
import Input from '../../UI/Input/index';
import Select from '../../UI/Select/index';

import styles from './AcceptanceOfApplicationsPage.module.scss';

const AcceptanceOfApplicationsPage = () => {
  const phone_REG_EXP = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  function addMonths(date, months) {
    var d = date.getDate();
    date.setMonth(date.getMonth() + +months);
    if (date.getDate() !== d) {
      date.setDate(0);
    }
    return date;
  }
  const dateNow = new Date();
  const formikCreate = useFormik({
    initialValues: {
      department_id: '',
      programs_names: '',
      adding_reason: '',
      username: '',
      user_position: '',
      user_email: '',
      user_phone: '',
      consider_before_date: addMonths(dateNow, 2).toISOString(),
    },
    validationSchema: Yup.object({
      programs_names: Yup.mixed()
        .when('isArray', {
          is: Array.isArray,
          then: Yup.array().of(Yup.string()),
          otherwise: Yup.string(),
        })
        .required('Введите наименования программ'),
      adding_reason: Yup.string().required(
        'Введите основание для включения в базу'
      ),
      username: Yup.string().required('Введите имя'),
      user_position: Yup.string().required('Введите должность'),
      user_email: Yup.string()
        // .email('Введите корректный email')
        .required('Введите email'),
      user_phone: Yup.string()
        .matches(phone_REG_EXP, 'Введите правильный номер')
        .required('Укажите номер телефона'),
      department_id: Yup.string().required('Выберите объект информатизации'),
    }),
    onSubmit: async (values, { resetForm }) => {
      await setSubmitInfo(values);
      resetForm(values);
    },
  });

  async function createUser(data) {
    const responce = await fetch('/api/requests/', {
      method: 'POST',
      body: data,
    })
      .then((r) => {
        return r.json();
      })
      .catch((error) => {
        console.log(error);
      });
    return responce;
  }

  async function setSubmitInfo(values) {
    const formData = new FormData();
    for (let item of Object.entries(values)) {
      if (item[0] === 'programs_names') {
        formData.append(item[0], [formikCreate.values.programs_names]);
      }
      formData.append(item[0], item[1]);
    }
    const responce = await createUser(formData);
    if (responce.id) {
      openNotification({
        title: 'Создание новой заявки',
        text: 'Ваша заявка успешно отправлена',
        type: 'success',
      });
    } else {
      openNotification({
        title: 'Создание новой заявки',
        text: 'Отправка заявки не выполнена',
        type: 'error',
      });
    }
  }

  return (
    <div className={styles.AcceptanceOfApplicationsPage}>
      <h1>ПРИЕМ ЗАЯВОК</h1>
      <form onSubmit={formikCreate.handleSubmit}>
        <Select
          mode="default"
          id="department_id"
          className="form-select"
          required={true}
          {...formikCreate.getFieldProps('department_id')}
          formError={formikCreate}
        />
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
            className="form-control"
            placeholder="Введите должность"
            {...formikCreate.getFieldProps('user_position')}
            formError={formikCreate}
          />
        </div>
        <br />
        <div className={cn(styles.input__item)}>
          <Input
            mode="ask"
            id="user_email"
            type="email"
            className="form-control"
            placeholder="ВведитеE-mail"
            {...formikCreate.getFieldProps('user_email')}
            formError={formikCreate}
          />
        </div>
        <br />
        <div className={cn(styles.input__item)}>
          <Input
            mode="ask"
            type="text"
            id="user_phone"
            {...formikCreate.getFieldProps('user_phone')}
            formError={formikCreate}
            placeholder="Введите контактный номер телефона"
            mask={'+7(999) 999-99-99'}
          />
        </div>
        <br />
        <div className="service-form-submit">
          <button type="submit" className="form-submit" text="Отправить">
            Отправить
          </button>
          <button
            className="form-submit"
            text="Сбросить"
            onClick={(e) => formikCreate.resetForm()}
            type="reset"
          >
            Сбросить
          </button>
        </div>
      </form>
    </div>
  );
};

export default AcceptanceOfApplicationsPage;

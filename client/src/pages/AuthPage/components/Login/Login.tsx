import React, { useState } from 'react';
import { useHttp } from '../../../../hooks/http.hook';
import styles from './Login.module.scss'

export const Login = () => {
  const { loading, error, request } = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: '',
    username: ''
  });

  const changeHandler = (event: any) => {
    setForm({...form, [event.target.name]: event.target.value });
  }

  return (
    <form className={styles.registration}>
      {/* <Field<string>
        name="email"
        component={EmailInput}
        placeholder="name@example.com"
        label="Ваш email* :"
        required
      />
      <Field<string> name="firstName" component={TextInputField} id="firstName" required label="Введите имя* :" />
      <Field<string> name="lastName" component={TextInputField} id="lastName" required label="Введите фамилию* :" />
      <Button type="submit" color="blue" fullWidth>
        Зарегистрироваться
      </Button> */}
      <input type="email" required name="email" placeholder="Email" onChange={changeHandler} />
      <input type="password" required name="password" placeholder="Password" onChange={changeHandler} />
      <input type="text" required name="username" placeholder="Username" onChange={changeHandler} />
      <button type="submit">Submit</button>
    </form>
  )
}

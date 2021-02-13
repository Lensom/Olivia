import React, { useState } from 'react';
import { useHttp } from '../../../../hooks/http.hook';
import styles from './Registration.module.scss'

export const Registration = () => {
  const { loading, error, request } = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: '',
    username: ''
  });

  const changeHandler = (event: any) => {
    setForm({...form, [event.target.name]: event.target.value });
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      console.log(data);
    } catch (e) {}
  }

  return (
    <form className={styles.registration} onSubmit={registerHandler}>
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

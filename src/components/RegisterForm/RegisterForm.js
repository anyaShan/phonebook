import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux/es/exports';
import { register } from 'redux/auth/operations';
// import { useAuth } from '../../hooks';

import * as yup from 'yup';
import { FormWrap, FieldWrap } from './RegisterForm.styled';

let schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  // const userAuth = useAuth();
  // console.log(userAuth);

  const namelInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleFormSubmit = (values, { resetForm }) => {
    // const { name, email } = values;
    // if (userAuth.name === name) {
    //   return alert(`This ${name} already exists, please choose another.`);
    // }
    // if (userAuth.email === email) {
    //   return alert(`This ${email} already exists, please choose another.`);
    // }
    // console.log(values);

    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={handleFormSubmit}
    >
      <FormWrap>
        <div>
          <label htmlFor={namelInputId}>Name</label>
          <FieldWrap
            type="name"
            name="name"
            required
            placeholder="User"
            id={namelInputId}
          />
          <ErrorMessage component="span" name="name" />
          <label htmlFor={emailInputId}>Email</label>
          <FieldWrap
            type="email"
            name="email"
            required
            placeholder="user@gmail.com"
            id={emailInputId}
          />
          <ErrorMessage component="span" name="email" />
          <label htmlFor={passwordInputId}>Password</label>
          <FieldWrap
            type="password"
            name="password"
            required
            placeholder="User_123"
            id={passwordInputId}
          />
          <ErrorMessage component="span" name="password" />
        </div>
        <button type="submit" disabled={false}>
          Register
        </button>
      </FormWrap>
    </Formik>
  );
};

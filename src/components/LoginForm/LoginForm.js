import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux/es/exports';
import { logIn } from 'redux/auth/operations';
import * as yup from 'yup';
import { FormWrap, FieldWrap } from './LoginForm.styled';

let schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  //   const contacts = useSelector(selectContacts);
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleFormSubmit = (values, { resetForm }) => {
    const { email, password } = values;

    dispatch(logIn({ email, password }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={handleFormSubmit}
    >
      <FormWrap>
        <div>
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
          Log In
        </button>
      </FormWrap>
    </Formik>
  );
};

import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import * as yup from 'yup';
import { FormWrap, FieldWrap } from './ContactForm.styled';

const regExpName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const regExpNumber =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      regExpName,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      regExpNumber,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleFormSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    }

    dispatch(addContact({ name, number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={handleFormSubmit}
    >
      <FormWrap>
        <div>
          <label htmlFor={nameInputId}>Name</label>
          <FieldWrap
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
            placeholder="Rosie Simpson"
            id={nameInputId}
          />
          <ErrorMessage component="span" name="name" />
          <label htmlFor={numberInputId}>Number</label>
          <FieldWrap
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
            placeholder="459-12-56"
            id={numberInputId}
          />
          <ErrorMessage component="span" name="number" />
        </div>
        <button type="submit" disabled={false}>
          Add contact
        </button>
      </FormWrap>
    </Formik>
  );
};

// ======================= ванільний інпут ============================

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = nanoid();
//   numberInputId = nanoid();

//   handleFormChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();

//     this.props.onSubmit(this.state);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <Form onSubmit={this.handleFormSubmit}>
//         <div>
//           <label htmlFor={this.nameInputId}>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             placeholder="Rosie Simpson"
//             id={this.nameInputId}
//             onChange={this.handleFormChange}
//           />
//           <label htmlFor={this.numberInputId}>Number</label>
//           <input
//             type="tel"
//             name="number"
//             value={number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             placeholder="459-12-56"
//             id={this.numberInputId}
//             onChange={this.handleFormChange}
//           />
//         </div>
//         <button type="submit" disabled={false}>
//           Add contact
//         </button>
//       </Form>
//     );
//   }
// }

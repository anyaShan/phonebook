import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';

import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

import { MainContainer } from 'components/MainContainer/MainContainer';
import { Container } from './Contacts.styled';
import { Section } from 'components/Section/Section';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <Helmet>
        <title>Your tasks</title>
      </Helmet> */}
      <MainContainer>
        {isLoading && !error ? (
          <Loader />
        ) : (
          <Container>
            <Sidebar title="Phonebook">
              <ContactForm />
            </Sidebar>
            <Section title="Contacts">
              <Filter />
              <ContactList />
            </Section>
          </Container>
        )}
      </MainContainer>
      {/* <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList /> */}
    </>
  );
}

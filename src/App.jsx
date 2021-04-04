import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Layout from 'components/Layout/Layout';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import s from './components/PhoneBook/PhoneBook.module.css';

function App({ contacts }) {
  return (
    <Layout>
      <Section>
        <ContactForm />
        <Filter />
        <CSSTransition
          in={contacts.length > 0}
          timeout={250}
          classNames={s}
          unmountOnExit
        >
          <ContactList />
        </CSSTransition>
      </Section>
    </Layout>
  );
}


const mapStateToProps = state => ({
  contacts: state.phonebook.contacts,
  value: state.phonebook.filter
})


export default connect(mapStateToProps)(App);
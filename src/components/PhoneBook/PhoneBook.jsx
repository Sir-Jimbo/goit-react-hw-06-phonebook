import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import s from './PhoneBook.module.css';
import Layout from 'components/Layout/Layout';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';


class PhoneBook extends Component {

   state = {
      contacts: [],
      filter: '',
      error: false,
      message: null
   }

   componentDidMount() {
      const contacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(contacts);
      if (parsedContacts) {
         this.setState({ contacts: parsedContacts });
      }
   }

   componentDidUpdate(prevProps, prevState) {
      const currentContacts = this.state.contacts;
      if (currentContacts !== prevState.сontacts) {
         localStorage.setItem('contacts', JSON.stringify(currentContacts));
      }
   }

   isShowMessage = (error) => {
      this.setState({ message: error });
      setTimeout(() => {
         this.setState({ message: null });
      }, 2500);
   }

   formSubmitHandler = ({ name, number }) => {
      const contact = {
         id: uuidv4(),
         name: name,
         number: number,
      }

      if (name === '') {
         this.isShowMessage('Enter name, please!');
         return;

      }
      if (number === '') {
         this.isShowMessage('Enter phone, please!');
         return;
      }

      if (
         this.state.contacts.find((item) => item.name.toLowerCase() === name.toLowerCase())) {
         this.isShowMessage(`${name} is already in contacts.`);
         return;
      }
      else {
         this.setState(({ contacts }) => ({
            contacts: [...contacts, contact]
         }))
      }
   }

   deleteContact = (contactId) => {
      this.setState(prevState => ({
         contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      }));
   };

   changeFilter = e => {
      this.setState({ filter: e.currentTarget.value })
   }

   render() {
      const { contacts, filter, message } = this.state;
      const { formSubmitHandler, changeFilter, deleteContact } = this;
      const normalizedFilter = this.state.filter.toLowerCase();
      const filterContacts = this
         .state
         .contacts
         .filter(contact => contact
            .name
            .toLowerCase()
            .includes(normalizedFilter));

      return (
         <Layout>
            <Section>
               <CSSTransition
                  in={message}
                  timeout={250}
                  classNames={s}
                  unmountOnExit
               >
                  <Notification
                     message={message} />
               </CSSTransition>
               <ContactForm
                  onSubmit={formSubmitHandler}
               />
               {contacts.length > 1 && (
                  <Filter
                     value={filter}
                     onChange={changeFilter}
                  />
               )}
               <CSSTransition
                  in={contacts.length > 0}
                  timeout={250}
                  classNames={s}
                  unmountOnExit
               >
                  <ContactList
                     items={filterContacts}
                     onDeleteContact={deleteContact}
                  />
               </CSSTransition>
            </Section>
         </Layout>
      );
   }
}



export default PhoneBook;
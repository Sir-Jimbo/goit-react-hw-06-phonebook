import { connect } from 'react-redux';
import * as actions from '../../redux/phonebook/phonebook-actions';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Contact from 'components/Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
   return (
      <TransitionGroup
         component="ul"
         className={s.list}
      >
         {contacts.map(({ id, name, number }) => (
            <CSSTransition
               key={id}
               timeout={250}
               classNames={s}
            >
               <Contact
                  id={id}
                  name={name}
                  number={number}
                  onClick={() => onDeleteContact(id)}
               />
            </CSSTransition>
         ))
         }
      </TransitionGroup >

   )
}

const getVisibleContacts = (allContacts, filter) => {
   const normalizedFilter = filter.toLowerCase();
   return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
   );
};

const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
   contacts: getVisibleContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
   onDeleteContact: id => dispatch(actions.deleteContact(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
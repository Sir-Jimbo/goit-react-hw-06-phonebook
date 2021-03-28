import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Contact from 'components/Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ items, onDeleteContact }) => {
   return (
      <TransitionGroup
         component="ul"
         className={s.list}
      >
         {items.map(({ id, name, number }) => (
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

export default ContactList;
import { connect } from 'react-redux';
import * as actions from '../../redux/phonebook/phonebook-actions';
import { CSSTransition } from 'react-transition-group';
import s from './Filter.module.css';

const Filter = ({ value, onChange, contacts }) => {
   return (
      <CSSTransition
         in={contacts.length > 1}
         appear={true}
         timeout={250}
         classNames={s}
         unmountOnExit
      >
         <div className={s.container}>

            <h2 className={s.title}> Contacts </h2>
            <label className={s.label}>
               Find contacts by name:
            </label>
            <input
               className={s.input}
               placeholder="search by name"
               type="text"
               value={value}
               onChange={onChange}
            />

         </div >
      </CSSTransition>
   );
}
const mapStateToProps = state => ({
   contacts: state.phonebook.contacts,
   value: state.phonebook.filter
});

const mapDispatchToProps = dispatch => ({
   onChange: (e) => dispatch(actions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
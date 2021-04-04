import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/phonebook/phonebook-actions';
import { CSSTransition } from 'react-transition-group';
import Notification from 'components/Notification/Notification';
import s from './ContactForm.module.css'

class ContactForm extends Component {

   state = {
      name: '',
      number: '',
      message: null,
      error: false,
   }

   isShowMessage = (error) => {
      this.setState({ message: error });
      setTimeout(() => {
         this.setState({ message: null });
      }, 2500);
   }


   handleChange = e => {
      const { name, value } = e.currentTarget;

      this.setState({
         [name]: value,
      })
   }


   handleSubmit = e => {
      const { name, number } = this.state;
      e.preventDefault();

      if (name === '') {
         this.isShowMessage('Enter name, please!');
         return;

      }
      if (number === '') {
         this.isShowMessage('Enter phone, please!');
         return;
      }

      if (
         this.props.contacts.find((item) => item.name.toLowerCase() === name.toLowerCase())) {
         this.isShowMessage(`${name} is already in contacts.`);
         return;
      }

      this.props.onSubmit(name, number);
      this.reset();
   }


   reset = () => (
      this.setState({ name: "", number: "" })
   )

   render() {

      const { name, number, message } = this.state;
      return (
         <>
            <CSSTransition
               in={message}
               timeout={250}
               classNames={s}
               unmountOnExit
            >
               <Notification
                  message={message} />
            </CSSTransition>
            <form className={s.container} onSubmit={this.handleSubmit}>

               <label className={s.label}>
                  Name
               </label>
               <input
                  className={s.input}
                  type="text"
                  name="name"
                  placeholder="enter your name"
                  value={name}
                  onChange={this.handleChange}
               />
               <label className={s.label}>
                  Phone number
               </label>
               <input
                  className={s.input}
                  type="tel"
                  name="number"
                  placeholder="enter your number"
                  value={number}
                  onChange={this.handleChange} />
               <button className={s.button} type="submit">Add contact</button>
            </form>
         </>
      );
   }
}
const mapStateToProps = state => ({
   contacts: state.phonebook.contacts,
})

const mapDispatchToProps = dispatch => ({
   onSubmit: (name, number) => dispatch(actions.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
import { Component } from 'react';
import s from './ContactForm.module.css'

class ContactForm extends Component {

   state = {
      name: '',
      number: '',
   }


   handleChange = e => {
      const { name, value } = e.currentTarget;

      this.setState({
         [name]: value,
      })
   }


   handleSubmit = e => {
      e.preventDefault();

      this.props.onSubmit(this.state);
      this.reset();
   }


   reset = () => (
      this.setState({ name: "", number: "" })
   )

   render() {

      return (
         <form className={s.container} onSubmit={this.handleSubmit}>

            <label className={s.label}>
               Name
               </label>
            <input
               className={s.input}
               type="text"
               name="name"
               placeholder="enter your name"
               value={this.state.name}
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
               value={this.state.number}
               onChange={this.handleChange} />
            <button className={s.button} type="submit">Add contact</button>
         </form>
      );
   }
}

export default ContactForm;
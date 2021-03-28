
import PropTypes from 'prop-types';
import s from './Contact.module.css';

const Contact = ({ id, name, number, onClick }) => {
   return (

      <li key={id} className={s.item}>
         <p className={s.contact}>{name}</p>
         <p className={s.contact}>{number}</p>
         <button
            className={s.button}
            type="button"
            onClick={onClick}
         >
            x
                  </button>
      </li>
   )
}

Contact.propTypes = {
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,

}

export default Contact;
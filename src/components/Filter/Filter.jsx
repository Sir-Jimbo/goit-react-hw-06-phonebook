import { CSSTransition } from 'react-transition-group';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
   return (
      <CSSTransition
         in={true}
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
               onChange={onChange} />

         </div >
      </CSSTransition>
   );
}

export default Filter;
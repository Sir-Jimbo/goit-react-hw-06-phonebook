import Logo from 'components/Logo/Logo';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import s from './Header.module.css';

const Header = () => {
   return (
      <header className={s.container}>
         <CSSTransition
            in={true}
            appear={true}
            classNames={s}
            timeout={500}
            unmountOnExit>
            <Logo />
         </CSSTransition>
      </header>
   );
};

export default Header;
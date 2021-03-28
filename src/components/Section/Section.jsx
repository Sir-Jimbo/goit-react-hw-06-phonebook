import React from 'react';
import s from './Section.module.css';


const Section = ({ children }) => {
   return (
      <>
         <section className={s.container}>
            {children}
         </section>
      </>
   );
};

export default Section;
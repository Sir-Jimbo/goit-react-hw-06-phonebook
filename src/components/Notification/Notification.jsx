import React from 'react';
import s from './Notification.module.css';

const Notification = ({ message }) => {
   return (
      <div className={s.overlay}>
         <p className={s.message}>
            {message}
         </p>
      </div>
   );
};

export default Notification;
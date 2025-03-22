import React from 'react';
import { CustomButtonProps } from './custombutton.types';

import styles from './custombutton.module.scss';

const CustomButton: React.FC<CustomButtonProps> = ({ className = '', style = {}, children }) => {
  
  return (
    <div className={`${styles.container} ${className}`} style={style}>
      {children}
    </div>
  );
}

export default CustomButton;

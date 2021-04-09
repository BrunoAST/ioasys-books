import React from 'react';

import { ButtonModel } from './models/ButtonModel';

import './button.scss';

const Button: React.FC<ButtonModel> = ({ styleType, type, title, icon }) => {
    return (
        <button className={styleType} type={ type }>
            {
                styleType === 'icon' ? <img className="image" src={icon} alt="Ícone" width="20" /> : null
            }
            { styleType === 'text' ? title : null }
        </button>
    );
}

export default Button;
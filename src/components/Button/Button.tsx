import React from 'react';

import { ButtonModel } from './models/ButtonModel';

import './button.scss';

const Button: React.FC<ButtonModel> = ({ styleType, type, title, disabled = false, click, children, style }) => {
    return (
        <button
            style={style ? style : null}
            className={styleType}
            type={type}
            onClick={() => click ? click() : null}
            disabled={disabled}
        >
            { children }
            { styleType === 'text' ? title : null}
        </button>
    );
}

export default Button;
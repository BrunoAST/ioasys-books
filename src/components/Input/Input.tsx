import React from 'react';
import Button from '../Button/Button';

import './input.scss';
import { InputModel } from './models/InputModel';

const Input: React.FC<InputModel> = ({ label, controlName, register, type, errorMessage }) => {
    return (
        <div className="label-float">
            <input
                autoComplete="off"
                type={type}
                className="white-fg"
                {...register(controlName)}
            />
            <label className="white-fg">{label}</label>
            {
                type === 'password' ? <span className="button-wrapper"><Button styleType="text" type="submit" title="Entrar" /></span> : null
            }

            {
                type === 'password' && errorMessage ? 
                    <div className="tooltip"><span className="tooltiptext">{ errorMessage }</span></div> :
                    null
            }

        </div>
    );
}

export default Input;

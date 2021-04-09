import React from 'react';

import { LogoModel } from './models/LogoModel';
import logo from '../../assets/Logo.svg';
import logoAlt from '../../assets/Logo-alt.svg';

import './logo.scss';

const Logo: React.FC<LogoModel> = ({ typeStyle }) => {
    function defineLogo() {
        const logoStyle = typeStyle === 'Application' ? logoAlt : logo;
        let textColor = 'container-logo__title';
        textColor = textColor + ` ${typeStyle === 'Application' ? 'text-primary-fg' : 'white-fg'}`;

        return { logoStyle, textColor };
    }

    return (
        <section>
            <div className="container-logo">
                <picture>
                    <img src={defineLogo().logoStyle} alt="Logo" />
                </picture>
                <h1 className={defineLogo().textColor}>Books</h1>
            </div>
        </section>
    );
}

export default Logo;

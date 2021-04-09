import React from 'react';
import Logo from '../../../components/Logo/Logo';

import './login.scss';

const Login: React.FC = (props) => {
    return (
        <div className="container-login default-container-with">
            <div className="content">
                <Logo typeStyle="Login" />
                {props.children}
            </div>
        </div>
    );
}

export default Login;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import './login.scss';

import Input from '../../components/Input/Input';
import LoginHttp from './services/LoginHttp';
import LoginModel from './models/LoginModel';
import User from '../../shared/models/User';
import history from '../../services/history';
import ROUTES from '../../routes/RouterName';
import { addUser } from '../../store/modules/user/actions';
import { addToken } from '../../store/modules/auth/actions';

const Login: React.FC<{ dispatch: any }> = (props) => {
    const [errorMessage, setErrorMessage] = useState('');

    const { register, handleSubmit } = useForm();

    async function onSubmit(data: LoginModel) {
        await LoginHttp.signIn(data)
            .then(res => {
                registerData(res.data, res.headers);
                history.push(ROUTES.HOME);
                setErrorMessage('');
            })
            .catch(() => setErrorMessage('Email e/ou senhas incorretos.'));
    }

    function registerData(data: User, header: any) {
        const { dispatch } = props;

        dispatch(addUser(data));
        dispatch(addToken(header));
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <Input label="Email" controlName="email" type="email" register={register} />
                <Input
                    label="Senha"
                    controlName="password"
                    errorMessage={errorMessage}
                    type="password" 
                    register={register}
                />
            </form>
        </>
    );
}

export default withRouter(connect()(Login));

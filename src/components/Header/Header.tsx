import React, { Component } from 'react';

import './header.scss';

import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import { FiLogOut } from 'react-icons/fi';
import { removeToken } from '../../store/modules/auth/actions';
import { removeUser } from '../../store/modules/user/actions';
import { connect } from 'react-redux';
import history from '../../services/history';
import ROUTES from '../../routes/RouterName';
import storeState from '../../store/store-state';

class Header extends Component {
    getUserName(): string {
        return storeState().user.name;
    }

    logout = () => {
        const { dispatch } = this.props as any;
        dispatch(removeToken());
        dispatch(removeUser());

        history.push(ROUTES.LOGIN);
    }

    render() {
        return (
            <header>
                <nav className="nav-container">
                    <Logo typeStyle="Application" />

                    <ul className="actions">
                        <li className="user-welcome text-primary-fg">
                            Bem vindo, <span>{this.getUserName()}!</span>
                        </li>
                        <li onClick={this.logout}>
                            <Button type="button" styleType="icon">
                                <FiLogOut />
                            </Button>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default connect()(Header);

import React from 'react';

import './application.scss';

import Header from '../../../components/Header/Header';

const Application: React.FC = (props) => {
    return (
        <div className="container-application default-container-with">
            <Header  />
            { props.children }
        </div>
    );
}

export default Application;
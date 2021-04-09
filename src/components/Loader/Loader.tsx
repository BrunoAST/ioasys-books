import React from 'react';

import './loader.scss';

import { LoaderModel } from './models/LoaderModel';

const Loader: React.FC<LoaderModel> = ({ show }) => {
    return (
        <>
        {
            show === true ?
                <div className="loading">
                <span className="primary-bg"></span>
                <span className="primary-bg"></span>
                <span className="primary-bg"></span>
                <span className="primary-bg"></span>
                </div>
            : null
        }
        </>
    );
}

export default Loader;
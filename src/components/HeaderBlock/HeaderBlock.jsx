import React from 'react';
import './HeaderBlock.scss';

const HeaderBlock = ({ title, description }) => (
    <div 
        className="header-block"
    >
        <div className="container">
            <div className="header-block__content">
                <h1>{ title }</h1>
                <h2>{ description }</h2>
            </div>
        </div>
    </div>
)

export default HeaderBlock;
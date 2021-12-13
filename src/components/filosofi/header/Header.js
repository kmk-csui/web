import React from 'react';
import './Header.css';

export default function Header({ children, color }) {
    return (
        <div className='header-wrapper'>
            <div style={{
                background: `linear-gradient(transparent 50%,${color} 50%)`
            }}>
                <p className='header-text'>{children}</p>
            </div>
        </div>
    )
}
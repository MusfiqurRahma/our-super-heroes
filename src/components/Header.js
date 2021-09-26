import React from 'react';
import './Header.css'

const Header = () => {
    return (
        // This is main header part
        <div className='header'>
            <h1><i class="fas fa-dove"></i> Bravy United Nations Peacekeeping Team</h1>
            <h4>We are the UN peacekeeping team. Our ideal is to establish peace at home and abroad. As Bangladeshis, we are always ready to maintain peace,Bravo!!!</h4>
            <h2>TOTAL BUDGET: 169 MILLION</h2>
            
            {/* navbar started here */}
            <nav>
                <a href="/home">Home</a>
                <a href="/special">Speical</a>
                <a href="/sidemap">Side Map</a>
                <a href="/contactUs">Contact Us</a>
            </nav>
        </div>
        // header part ended
    );
};

export default Header;
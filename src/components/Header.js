import React from 'react';
import myLogo from '../assets/lib-img.png';

function Header() {
  return (
    <header>
      <div class="menu-toggle" id="hamburger">
            <i class="fas fa-bars"></i>
        </div>
        <div class="overlay"></div>
        <div class="container">
            <nav class="na-img">
                <img class="logo" src={myLogo} alt=""/>
                
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
}

export default Header;


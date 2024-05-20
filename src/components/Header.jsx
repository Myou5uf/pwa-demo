import React from 'react';
import CustomNavbar from './CustomNavbar/CustomNavbar';


const Header = () => {
  return (
    <header className="App-header">
      <div className='header-top'>
        <p>Новый каталог уже на сайте!</p>
      </div>
      <CustomNavbar/>
    </header>
  );
};

export default Header;

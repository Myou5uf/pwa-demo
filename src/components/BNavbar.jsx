import React, {useState} from 'react';
import {Container, Form, Nav, Navbar, Stack} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import SearchIcon from './icons/SearchIcon';
import UserButtons from './UserButtons';
import SearchInput from './SearchInput';

const BNavbar = () => {
  const [underLineStyle, setUnderLineStyle] = useState({});

  // Обработчик наведения на пункт меню
  function handleMouseEnter(e) {
    const {target} = e;

    const newStyle = {
      width: target.offsetWidth + 'px',
      left: target.offsetLeft + 'px',
      transition: 'left 0.3s ease-in-out, width 0.3s ease-in-out, opacity 0.3s ease-in-out',
    };

    setUnderLineStyle(newStyle);
  }


  // Обработчик покидания пункта меню
  function handleMouseLeave(e) {
    const {target} = e;

    setUnderLineStyle((preStyle) => ({
      ...preStyle,
      opacity: 0,
      visibility: 'hidden',
      transition: 'left 0.3s ease-in-out, width 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
    }))
  }

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container className="gx-0">
        <Navbar.Brand>
          <Link to="/" className="navbar-brand__link">
            <Logo/>
            <div className='navbar-brand__rect'></div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
        >
          <span className="bar"></span>
          <span className="bar"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll" className="expanded">
          <Stack direction="horizontal" className="navbar-collapse__container">
            <div className='navbar__nav-container'>
              <div className='navbar__underline' style={underLineStyle}></div>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{maxHeight: '100px'}}
                navbarScroll
              >
                <Link to="/catalog" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Каталог</Link>
                <Link to="/brands" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Бренды</Link>
                <Link to="/about" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>О сайте</Link>
                <Link to="/contact" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Контакты</Link>
              </Nav>
            </div>
            <div className='navbar-theme'>
              <ThemeToggle/>
            </div>
            <div className='user-actions'>
              <SearchInput/>
              <UserButtons />
            </div>
          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BNavbar;

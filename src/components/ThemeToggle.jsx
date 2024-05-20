import React, {useState} from 'react';
import {Button, ButtonGroup } from 'react-bootstrap';
import MoonIcon from './icons/MoonIcon';
import SunIcon from './icons/SunIcon';

const ThemeToggle = ({className}) => {
  const [theme, setTheme] = useState('light');

  const handleChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const isLight = theme === 'light';

  return (
    <ButtonGroup className={`theme-toggle ${className}`}>
      <Button
        className={!isLight ? 'theme-toggle__btn active' : 'theme-toggle__btn'}
        onClick={() => handleChange('dark')}
        variant="dark"
      >
        <MoonIcon className="icon" variant={isLight ? 'light' : 'dark'} />
      </Button>
      <Button
        className={isLight ? 'theme-toggle__btn active' : 'theme-toggle__btn'}
        onClick={() => handleChange('light')}
        variant="light"
      >
        <SunIcon className="icon"  variant={isLight ? 'dark' : 'light'} />
      </Button>
    </ButtonGroup>
  )
};

export default ThemeToggle;
//
// <ButtonGroup toggle className="theme-toggle">
//   <Button onClick={handleChange} className={btnClassName}>
//     <MoonIcon className={iconClassName} />
//   </Button>
//   <Button onClick={handleChange} className={btnClassName}>
//     <SunIcon className={iconClassName} />
//   </Button>
// </ButtonGroup>

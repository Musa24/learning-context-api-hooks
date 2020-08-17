import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

import './Navbar.css';

function Navbar() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav
      className="Navbar"
      style={{ backgroundColor: theme.ui, color: theme.syntax }}
    >
      <h1>Book List Application</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;

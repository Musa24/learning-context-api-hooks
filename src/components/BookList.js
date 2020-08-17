import React, { Component } from 'react';
import './BookList.css';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  // static contextType = ThemeContext;

  render() {
    return (
      <ThemeContext.Consumer>
        {(themeContext) => {
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          return (
            <div
              className="BookList"
              style={{ color: theme.syntax, background: theme.bg }}
            >
              <ul>
                <li style={{ background: theme.ui }}>Book 1</li>
                <li style={{ background: theme.ui }}> Book 2</li>
                <li style={{ background: theme.ui }}>Book 3</li>
                <li style={{ background: theme.ui }}>Book 4</li>
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default BookList;

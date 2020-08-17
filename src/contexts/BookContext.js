import React, { createContext, useState } from 'react';

export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, ,] = useState([
    { title: 'Book 1', id: 1 },
    { title: 'Book 2', id: 2 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;

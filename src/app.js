import React from 'react';
import { render } from 'react-dom';
import SearchParams from './searchParams';

const App = () => {
  return (
    <div>
      <h1>React V - Cars</h1>
      <h4>React Starter Kit - Sheldyn</h4>
      <br />
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById('root'));

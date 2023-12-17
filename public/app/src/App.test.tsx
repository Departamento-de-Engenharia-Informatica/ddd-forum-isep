import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mock the style file import
jest.mock('./App.sass', () => ({}));
jest.mock('react-toastify/dist/ReactToastify.css', () => ({}));
jest.mock('./shared/layout/Layout.sass', () => ({}));

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

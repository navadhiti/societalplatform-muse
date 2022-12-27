import React from 'react';
import { HashRouter } from 'react-router-dom';
import Layout from './Layout/Layout ';
import './App.css';
function App() {
  return (
    <>
      <HashRouter>
          <Layout />
      </HashRouter>
    </>
  );
}

export default App;

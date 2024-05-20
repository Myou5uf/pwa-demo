import React from 'react';
import { Container } from  'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const Root = () => {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Outlet/>
      </Container>
    </div>
  );
};

export default Root;

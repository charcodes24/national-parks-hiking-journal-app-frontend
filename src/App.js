import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Container from './components/Container';
import FullCard from './components/FullCard';

import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Container />
      </Route>
      <Route path="/park/:id">
        <FullCard />
      </Route>
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header';
import AddParkForm from './components/AddParkForm';
import Container from './components/Container';
import FullCard from './components/FullCard';

import './App.css';

function App() {
  const [parks, setParks] = useState([])

  useEffect(() => {
    fetch('http://localhost:9393/national_parks/')
    .then(res => res.json())
    .then(data => {
        setParks(data.national_parks)})
}, []);

  return (
    <Router>
      <Route exact path="/">
        <Header />
        <AddParkForm />
        <Container parks={parks} />
      </Route>
      <Route path="/park/:id">
        <FullCard />
      </Route>
    </Router>
  );
}

export default App;

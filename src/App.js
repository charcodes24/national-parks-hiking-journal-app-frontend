import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { trackPromise } from 'react-promise-tracker';

import Header from './components/Header';
import AddParkForm from './components/AddParkForm';
import Container from './components/Container';
import FullCard from './components/FullCard';

import LoadingIndicator from './LoadingIndicator';

import './App.css';

function App() {
  const [parks, setParks] = useState([])

  useEffect(() => {
    trackPromise(
      fetch("http://localhost:9393/national_parks/")
        .then((res) => res.json())
        .then((data) => {
          setParks(data.national_parks);
        })
    );
}, []);

function addPark(newPark) {
  setParks((mostUpdatedParks) => [...mostUpdatedParks, newPark])
}

function deletePark(id) {
  let updatedParks = parks.filter((park) => park.id !== id)
  setParks(updatedParks)
}

  return (
    <div>
      <Router>
        <Route exact path="/">
          <Header />
          <AddParkForm addPark={addPark} />
          <Container parks={parks} deletePark={deletePark} />
        </Route>
        <Route path="/park/:name">
          <FullCard parks={parks} />
        </Route>
      </Router>
      <LoadingIndicator />
    </div>
  );
}

export default App;

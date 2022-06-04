
import './App.css';

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import React, { Component } from 'react';

// import Layout from './containers/Layout'

import Tournaments from './components/tournaments';
import Teams from './components/teams';
import Team from './components/team';
import Overall from './components/overall';
import Standings from './components/standings';
import Navigation from './components/navigation';

// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';

class App extends Component {

  state = {
    tournament: 'Not Set'
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigation/>} >
            <Route path='tournaments' element={<Tournaments/>} />
            <Route path='standings/:tournament' element={<WrapStandings/>} />
            <Route path='teams' element={<Teams/>} >
              <Route path=':team' element={<Team/>} />
            </Route>
            <Route path='overall' element={<Overall/>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  };

}

function WrapStandings() {
  let params = useParams();
  return <Standings tournament={params.tournament}/>
}

function NotFound() {
  return <h1>Not Found</h1>;
}

export default App;

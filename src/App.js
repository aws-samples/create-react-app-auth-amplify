import React from 'react';
import {
  Route
} from "react-router-dom";
import './App.css';
import AWSLogin from "./components/AWSLogin";
import FullPageIntroWithFixedNavbar from "./components/FullPageIntroWithFixedNavbar";
import NavbarFixed from "./components/NavbarFixed";
import SearchForm from "./components/SearchForm";
import GroceryItemResults from "./components/GroceryItemResults";
import AboutUs from "./components/AboutUs";
import Fridge from "./components/Fridge";

function App() {
  return ( 
    <div className="App">
      <NavbarFixed />  
      <Route exact path="/" component={FullPageIntroWithFixedNavbar} /> 
      <Route path="/login" component={AWSLogin} />
      <Route path="/about" component={AboutUs} /> 
      <Route path="/SearchForm" component={SearchForm} />
      <GroceryItemResults />
    </div>
  );
}

export default App;
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
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

function App() {
  return ( 
    <div className="App">
      <Route exact path="/" component={FullPageIntroWithFixedNavbar} />
      <NavbarFixed />
      <Route path="/login" component={AWSLogin} />
      <Route path="/about" component={AboutUs} />
    </div>
  );
}

export default App;
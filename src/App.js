import React from "react";
// import './App.css';
import NavBar from './components/NavBar';
import {
	BrowserRouter as Router,Routes,Route,Link
}
 from 'react-router-dom';
import Home from './components/pages/Home';
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";


function App() {
  return (
  <>
  <Router>
      <NavBar />
  
      <Routes>

          <Route exact path='/'  element={<Home/>}/>
          <Route exact path='/services' element={<Services/>}/>
          <Route exact path='/sign-up' element={<SignUp/>}/>
          <Route exact path='/products' element={<Products/>}/>
      </Routes>
     
        
  </Router>
 
  </>

  );
}

export default App;

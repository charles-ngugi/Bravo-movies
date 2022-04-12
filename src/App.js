import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import {
	BrowserRouter as Router,Routes,Route,Link
}
 from 'react-router-dom';
import Home from './components/pages/Home';


function App() {
  return (
  <>
  <Router>
      <NavBar />
      <Routes>
          <Route path='/' exact element={<Home/>}/>
      </Routes>
      {/* <Home/> */}
        
  </Router>
 
  </>

  );
}

export default App;

import React from 'react';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import '../../App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer';
import Services from './Services';

function Home(){
    return(
        <>
        <HeroSection/>
        <Cards/>
        <Footer/>
       
        
        {/* <Routes>
            <Route path= '/' exact element={<HeroSection/>}></Route>
            <Route path= '/' exact element={<Cards/>}></Route>
        </Routes>  */}
        </>
        
    );
}

export default Home;
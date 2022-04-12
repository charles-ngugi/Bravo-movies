import React from 'react';
import HeroSection from '../HeroSection';
import '../../App.css';
import { Route, Routes } from 'react-router-dom';

function Home(){
    return(
        <>
        <HeroSection />
 
        <Routes>
            <Route path= '/'exact element='<HeroSection/>'></Route>
        </Routes>
        </>
        
    );
}

export default Home;
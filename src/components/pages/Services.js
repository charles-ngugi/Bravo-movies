import React from 'react'
import CardItem from '../CardItem'
import '../Cards.css'
import '../../App.css';
import Footer from '../Footer'

function Services() {
  return (
    <>
    <div className='cards'>
      <h1>Services Offered</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
              src='images/ps.jpg' 
              text='PlayStation Games' 
              label='PlayStation' 
              path='/services'
            />
            <CardItem 
              src='images/print.jpg' 
              text='Printing and Photocopying' 
              label='Print and Photocopy' 
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            {/* <CardItem 
              src='images/uncharted_s270z86d_500x749.jpg' 
              text='Photocopying' 
              label='Photocopying' 
              path='/services'
            /> */}
            <CardItem 
              src='images/kra2.jpg' 
              text='KRA Application and Renewal' 
              label='KRA' 
              path='/services'
            />
            <CardItem 
              src='images/dl.jpg' 
              text='Driving License Application and Renewal' 
              label='Driving License' 
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Services;
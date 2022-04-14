import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import '../App.css';

function Cards() {
  return (
    <div className='cards'>

        <h1>Check this out!!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/img-4.jpg' 
                    text='Check this out!' 
                    label='Adventure' 
                    path='/products'
                    />
                      <CardItem 
                    src='images/img-8.jpg' 
                    text='Check this out!' 
                    label='Adventure' 
                    path='/products'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/img-7.jpg' 
                    text='Check this out!' 
                    label='Adventure' 
                    path='/products'
                    />
                      <CardItem 
                    src='images/img-6.jpg' 
                    text='Check this out!' 
                    label='Adventure' 
                    path='/products'
                    />
                       <CardItem 
                    src='images/img-5.jpg' 
                    text='Check this out!' 
                    label='Adventure' 
                    path='/products'
                    />
                </ul>
            </div>
        </div> 
    </div>
    // <h1>Hello</h1>
  );
}

export default Cards;
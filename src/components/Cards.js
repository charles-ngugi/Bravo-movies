import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import '../App.css';

function Cards() {
  return (
    <div className='cards'>

        <h1>Available Genres</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/anim.jpg' 
                    text='Animation' 
                    label='Animations' 
                    path='/products'
                    />
                      <CardItem 
                    src='images/ima.jpg' 
                    text='Adventure Movies' 
                    label='Adventure' 
                    path='/products'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/uncharted_s270z86d_500x749.jpg' 
                    text='Action Movies' 
                    label='Action' 
                    path='/products'
                    />
                      <CardItem 
                    src='images/dsad.jpg' 
                    text='Horror Movies' 
                    label='Horror' 
                    path='/products'
                    />
                       <CardItem 
                    src='images/nn.jpg' 
                    text='Investigative Movies' 
                    label='Investigative' 
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
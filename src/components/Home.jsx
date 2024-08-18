import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import {pizzas} from '../assets/pizzas'


export default function Home() {
  return (
   <div className="home"> <Header />


    <div className="cards">
       {pizzas.map((pizza,index)=><CardPizza pizza = {pizza} key={index}/>)} 
 


    </div>
    </div>
  )
}
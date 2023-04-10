import { useState } from 'react'
import './App.css'
import drawer from '../public/images/drawers.jpg'

function App() {

  return (
    <div className="App">
      <header>
        <h1 className='sr-hidden'>Article preview page</h1>
       <img src={drawer} alt=""></img>
      </header>
      <main>
         <h2>Shift the overall look and feel by adding these wonderful 
         touches to furniture in your home
         </h2>

         <p>Ever been in a room and felt like something was missing? Perhaps 
         it felt slightly bare and uninviting. I’ve got some simple tips 
         to help you make any room feel complete.
         </p>

         Michelle Appleton
         28 Jun 2020

         Share
      </main>
  
    </div>
  )
}

export default App

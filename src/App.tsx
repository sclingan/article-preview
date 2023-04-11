import { useState } from 'react'
import './App.css'
import drawer from '../public/images/drawers.jpg'
import avatar from '../public/images/avatar-michelle.jpg'
import share from '../public/images/icon-share.svg'
import facebook from '../public/images/icon-facebook.svg'
import pinterest from '../public/images/icon-pinterest.svg'
import twitter from '../public/images/icon-twitter.svg'
import showSocial from './article'

function App() {

  return (
    <div className="App">
      <header>
        <h1 className='sr-only'>Article preview page</h1>
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
         <div className='profile-container' id='profile'>
          <img className='avatar' src={avatar} alt=""></img>
          <div>
          <p className='profile-name'>
           Michelle Appleton
         </p>
         <p className='post-date'>
         28 Jun 2020
         </p>
         </div>
         <button onClick={showSocial}>
          <img src={share} alt=""></img>
         </button>
         </div>
         </main>
         <div className='sr-only' id='social'>
          <h3>share</h3>
          <img src={facebook} alt=""></img>
          <img src={twitter} alt=""></img>
          <img src={pinterest} alt=""></img>
          {/* <button className='social-button' onClick={showSocial}><img className='social-button-icon' src={share} alt=""></img></button> */}
          <button className='social-button' onClick={showSocial}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#00000" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
          </button>
         </div>
  
    </div>
  )
}

export default App

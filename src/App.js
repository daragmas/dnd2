import React from 'react';
import './App.css'
import {useState} from 'react'
import MainMenu from './components/MainMenu'
import CreateCharacter from './components/CreateCharacter'

function App() {
  // This syntax is called JSX = JavaScript XML

  // useState is a function that returns an array of two elements
  // returns a state variable and a function
  // to update it
  const [screen, setScreen] = useState('main')

  return(
    <div>
      {
        (screen==='main') ? <MainMenu/> : <CreateCharacter/>
      }
    </div>
  )
}

export default App;
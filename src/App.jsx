import React from 'react'
import "./App.css"
import Intro from './components/intro'
import Training from './components/training'
import Nutrition from './components/nutrition'

function App() {
  return (<div className='All'>
      <Intro></Intro>
      <Training></Training>
      <Nutrition></Nutrition>
    </div>
  )
}

export default App
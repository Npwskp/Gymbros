import React from 'react'
import "./App.css"
import Intro from './components/intro'
import Training from './components/training'

function App() {
  return (<div className='All'>
      <Intro></Intro>
      <Training></Training>
    </div>
  )
}

export default App
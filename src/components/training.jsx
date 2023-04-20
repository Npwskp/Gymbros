import React from 'react'
import '../styles/training.css'

function Training() {
  return (
    <div className='Training'>
        <h1 style={{"fontFamily":"'Staatliches', cursive","color":"aliceblue","textAlign":"center","fontSize":"90px","margin":"0.5rem"}}>Training Plans</h1>
        <div className='block'>
            <img src='https://www.bodybuilding.com/images/2017/may/5-lat-pulldown-variations-for-an-impressive-physique--tall-v2.jpg' 
                alt='fitness-guy'
                width={"300px"}
                style={{"padding":"1rem"}}>
            </img>
            <div className='sub-block'>
                <button className='button_plan'>4 Days Per Week</button>
                <button className='button_plan'>5 Days Per Week</button>
                <button className='button_plan'>6 Days Per Week</button>
                <button className='button_plan'>Make your own Here!</button>
            </div>
        </div>
    </div>
  )
}

export default Training
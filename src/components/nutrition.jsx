import React from "react"
import '../styles/nutrition.css'
import '../styles/intro.css'

function Nutrition(){
    return(
        <div>
            <h1 style={{"fontFamily":"'Staatliches', cursive","color":"aliceblue","textAlign":"center","fontSize":"90px","margin":"0.5rem"}}>Nutrition</h1>
            <div className='description'>
                Calculate your calories need per day and Record your calories each day
            </div>
            <div className="Nu-block"></div>
        </div>
    )
}

export default Nutrition
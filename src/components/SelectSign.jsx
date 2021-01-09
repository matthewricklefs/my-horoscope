import React, { useState, useEffect } from 'react'
import { getSigns } from '../services/api'

export const SelectSign = ({ onSignSelected }) => {
    
    const [signs, setSigns ] = useState([])
    const [selectedSign, setSelectedSign] = useState([])

    useEffect( () => {
        getSigns().then(setSigns)   
      }, [] )
    
    return (
       <> 
            <h2>Please select a sign</h2>

            {selectedSign}

            <div className='grid'>
                {signs.map((sign) => (
                    <button 
                    className='sign'
                    key={sign}
                    onClick={ () => setSelectedSign(sign) }  
                    > 

                    {sign} 
                    </button>
                ))}

                { onSignSelected }
            </div>
        </>
    )
}
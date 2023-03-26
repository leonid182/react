import React, { useState } from "react"
import './style.css'
export const CustomInput = ()=>{
    const [inputValues, setInputValues] = useState('');
    return (
           <div className="input">
                <span>{inputValues}</span>
                <input id="input" placeholder="Enter" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setInputValues(event.target.value)}} value={inputValues} type="text" />
           </div>
        
    )
}
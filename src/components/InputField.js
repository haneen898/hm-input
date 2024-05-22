import React, { userName } from "react";
import setuserName from 'react';

const InputField = () => {
  return (
    <div>
    <input type='text' 
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
        placeholder='Fall Name'
        required/>
        </div>
  )
}

export default InputField;
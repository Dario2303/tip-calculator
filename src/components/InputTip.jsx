import React, { useState } from 'react'


function InputTip({name}) {

  const [focusInput, setFocusInput] = useState(false)
  
  console.log(focusInput)

  return (
    <div className={`flex bg-[var(--Very-light-grayish-cyan)] transition-border duration-100 items-center border-solid border-2 rounded ${focusInput ? 'border-[var(--Strong-cyan)]' : 'border-transparent'}`}>
        <input type="number" min='0' id={name}
                className="w-full text-right"
                onFocus={() => !focusInput && setFocusInput(true)}
                onBlur={() => focusInput && setFocusInput(false)}
        /> 
    </div>
  )
}

export default InputTip
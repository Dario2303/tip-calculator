import React, { useState } from 'react'

function Input({name, image}) {

  const [focusInput, setFocusInput] = useState(false)
  
  return (
    <div className={`flex bg-[var(--Very-light-grayish-cyan)] transition-border duration-100 items-center border-solid border-transparent border-2 rounded ${focusInput && 'border-[var(--focus-input)]'}`}>
        <div className='px-2'>
          <img src={image} alt="icon-dollar" width='15px'/>
        </div>
        <input type="number" min='0' id={name}
                className="w-full"
                onFocus={() => !focusInput && setFocusInput(true)}
                onBlur={() => focusInput && setFocusInput(false)}
        /> 
    </div>
  )
}

export default Input

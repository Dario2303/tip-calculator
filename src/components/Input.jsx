import React, { useState } from 'react'


function Input({name, image, value, setValue}) {

  const [focusInput, setFocusInput] = useState(false)
  
  return (
    <div className={`h-[48px] flex bg-[var(--Very-light-grayish-cyan)] transition-border duration-100 items-center border-solid border-2 rounded ${focusInput ? 'border-[var(--Strong-cyan)]' : 'border-transparent'}`}>
        <div className='px-2'>
          <img src={image} alt="icon-dollar" width='15px'/>
        </div>
        <input type="number" id={name}
                className="w-full text-right"
                value={value}
                onChange={e => setValue(e.target.value)}
                onFocus={() => !focusInput && setFocusInput(true)}
                onBlur={() => focusInput && setFocusInput(false)}
        /> 
    </div>
  )
}

export default Input

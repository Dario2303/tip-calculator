import React, { useState } from 'react'


function Input({step, name, image, value, setValue}) {

  const [focusInput, setFocusInput] = useState(false)
  

  return (
    <div className={`h-[48px] flex bg-[var(--Very-light-grayish-cyan)] transition-border duration-100 items-center border-solid border-2 rounded ${focusInput ? 'border-[var(--Strong-cyan)]' : 'border-transparent'}`}>
        <div className='px-2'>
          <img src={image} alt="icon-dollar" width='15px'/>
        </div>
        <input id={name}
                type='number'
                required
                step={step}
                min='0'
                value={value}
                onChange={e => setValue(e.target.value)}
                className="w-full text-right"
                onFocus={() => !focusInput && setFocusInput(true)}
                onBlur={() => focusInput && setFocusInput(false)}
        /> 
    </div>
  )
}

export default Input

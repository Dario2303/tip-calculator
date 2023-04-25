import React, { useState } from 'react'


function InputTip({name, tip, setTip}) {

  const [focusInput, setFocusInput] = useState(false)

  return (
    <div className={`flex bg-[var(--Very-light-grayish-cyan)] transition-border duration-100 items-center border-solid border-2 rounded ${focusInput ? 'border-[var(--Strong-cyan)]' : 'border-transparent'}`}>
        <input type="number" min='0' id={name}
                placeholder='custom'
                value={tip}
                onChange={e => setTip(e.target.value)}
                className="w-full text-right uppercase"
                onFocus={() => !focusInput && setFocusInput(true)}
                onBlur={() => focusInput && setFocusInput(false)}
        /> 
    </div>
  )
}

export default InputTip
import React from 'react'

function ButtonTip({children, tip, setTip, value, tipNumber}) {

    return (
        <>
        <button className={`rounded hover:opacity-[0.85] transition py-2 ${value === tipNumber ? 'bg-[var(--Strong-cyan)]' : 'bg-[var(--Very-dark-cyan)]'} text-white`} 
                value={tip}
                onClick={() => setTip(value)}
                
                >{children}</button>   
        </>
  )
}

export default ButtonTip

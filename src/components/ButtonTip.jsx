import React from 'react'

function ButtonTip({children, tip}) {

    return (
        <>
        <button className='rounded hover:opacity-[0.85] transition py-2 bg-[var(--Very-dark-cyan)] text-white' value={tip}>{children}</button>   
        </>
  )
}

export default ButtonTip

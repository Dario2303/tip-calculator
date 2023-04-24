import React from 'react'

function ButtonTip({children, tip}) {
    console.log(tip)
  return (
    <>
     <button className='bg-[var(--Very-dark-cyan)] text-white' value={tip}>{children}</button>   
    </>
  )
}

export default ButtonTip

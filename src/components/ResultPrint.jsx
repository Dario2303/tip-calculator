import React from 'react'

function ResultPrint({title, price}) {
  return (
    <div className='flex justify-between'>
        <div className='text-white'>
            <p className="text-sm">{title}</p>
            <p className="opacity-[0.5] text-xs">/ person</p>
        </div>
        <div>
            <h2 className='text-[var(--Strong-cyan)] text-3xl'>${price}</h2>
        </div>
    </div>
  )
}

export default ResultPrint

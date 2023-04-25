import React from 'react'
import ResultPrint from './ResultPrint'

function Result({Reset, total, tipAmount}) {


  return (
    <div className='bg-[var(--Very-dark-cyan)] m-6 rounded-xl grid grid-rows-2 items-center p-4'>
      <div className='h-full flex flex-col justify-around'>
        <ResultPrint
          title={'Tip Amount'}
          price={tipAmount > 0 ? tipAmount.toFixed(2) : '-.--'}
        />
        <ResultPrint
          title={'Total'}
          price={total > 0 ? total.toFixed(2) : '-.--'}
        />
      </div>

      <button className="uppercase bg-[var(--Strong-cyan)] w-full rounded h-7 hover:opacity-[0.85] transition"
              onClick={() => Reset()}
      >Reset</button>
    </div>
  )
}

export default Result

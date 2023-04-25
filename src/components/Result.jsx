import React from 'react'
import ResultPrint from './ResultPrint'

function Result({tipAmount}) {
  return (
    <div className='bg-[var(--Very-dark-cyan)] m-6 rounded-xl grid grid-rows-2 items-center p-4'>
      <div className='h-full flex flex-col justify-around'>
        <ResultPrint
          title={'Tip Amount'}
          price={tipAmount.toFixed(2)}
        />
        <ResultPrint
          title={'Total'}
          price={'20'}
        />
      </div>

      <button className="uppercase bg-[var(--Strong-cyan)] w-full rounded h-7 hover:opacity-[0.85] transition">Reset</button>
    </div>
  )
}

export default Result

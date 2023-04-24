import React from 'react'
import ResultPrint from './ResultPrint'

function Result() {
  return (
    <div className='bg-[var(--Very-dark-cyan)] m-6 rounded-xl grid grid-rows-2 items-center p-4'>
      <div className='h-full flex flex-col justify-around'>
        <ResultPrint
          title={'Tip Amount'}
          price={'20'}
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

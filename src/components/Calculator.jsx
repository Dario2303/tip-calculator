import React from 'react'
import Calculate from './Calculate'
import Result from './Result'

function Calculator() {
  return (
    <div className='md:grid md:grid-cols-2 grid-cols-1 calculator bg-white rounded-2xl w-[90%] max-w-[920px] h-[481px]'>
      <Calculate/>
      <Result/>
    </div>
  )
}

export default Calculator

import React, { useEffect, useState } from 'react'
import Calculate from './Calculate'
import Result from './Result'

function Calculator() {

  const [bill, setBill] = useState('')
  const [tip, setTip] = useState('')
  const [people, setPeople] = useState('')
  const [calc, setCalc] = useState({})
  
  

  useEffect(() => {
    const obj = {
      billValue: parseFloat(bill),
      tipValue: parseInt(tip),
      people: parseInt(people)
    }
    setCalc(obj)
  }, [tip, bill, people])
    
  return (
    <div className='md:grid md:grid-cols-2 grid-cols-1 calculator bg-white rounded-2xl w-[90%] max-w-[920px] h-full md:max-h-[481px]'>
      <Calculate
        setBill={setBill}
        bill={bill}
        people={people}
        setPeople={setPeople}
        tip={tip}
        setTip={setTip}
      />
      <Result/>
    </div>
  )
}

export default Calculator

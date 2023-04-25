import React, { useEffect, useState } from 'react'
import Calculate from './Calculate'
import Result from './Result'

function Calculator() {

  const [bill, setBill] = useState('')
  const [tip, setTip] = useState('')
  const [people, setPeople] = useState('')
  const [tipAmount, setTipAmount] = useState(0)
  

  const billNumber = parseFloat(bill)
  const tipNumber = parseInt(tip)
  const peopleNumber = parseInt(people)

  useEffect(() => {
    const calcTipAmount = (billNumber / peopleNumber) * (tipNumber / 100)
    setTipAmount(calcTipAmount)
  },[bill,tip,people])
  

  return (
    <div className='md:grid md:grid-cols-2 grid-cols-1 calculator bg-white rounded-2xl w-[90%] max-w-[920px] h-full md:max-h-[481px]'>
      <Calculate
        bill={bill}
        setBill={setBill}
        people={people}
        setPeople={setPeople}
        tip={tip}
        setTip={setTip}
      />
      <Result
        tipAmount={tipAmount}
      />
    </div>
  )
}

export default Calculator

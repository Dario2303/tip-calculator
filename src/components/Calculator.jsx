import React, { useEffect, useState } from 'react'
import Calculate from './Calculate'
import Result from './Result'

function Calculator() {

  const [bill, setBill] = useState('')
  const [tip, setTip] = useState('')
  const [people, setPeople] = useState('')
  const [tipAmount, setTipAmount] = useState(0)
  const [total, setTotal] = useState(0)
  const [validateValueBill, setValidateValueBill] = useState(false)
  const [validateValuePeople, setValidateValuePeople] = useState(false)

  const billNumber = parseFloat(bill)
  const tipNumber = parseInt(tip)
  const peopleNumber = parseInt(people)

  console.log(validateValueBill)

  useEffect (() => {
    function validate (event, setEvent) {
      if(event === 0) {
        setEvent(true)
        return
      }else{
        setEvent(false)
      }
    }
    
    validate(billNumber, setValidateValueBill)
    validate(peopleNumber, setValidateValuePeople)
    
  },[billNumber, peopleNumber])

  //CALC
  useEffect(() => {
    const calcTipAmount = (billNumber / peopleNumber) * (tipNumber / 100)
    setTipAmount(calcTipAmount)
    const calcTotal = (billNumber / peopleNumber) + calcTipAmount
    setTotal(calcTotal)
  },[bill,tip,people])
  
  //RESET 
  const Reset = () => {
    setBill('')
    setTip('')
    setPeople('')
  }

  return (
    <div className='md:grid md:grid-cols-2 grid-cols-1 calculator bg-white rounded-2xl w-[90%] max-w-[920px] h-full md:max-h-[481px]'>
      <Calculate
        bill={bill}
        setBill={setBill}
        people={people}
        setPeople={setPeople}
        tip={tip}
        setTip={setTip}
        tipNumber={tipNumber}
        validateValueBill={validateValueBill}
        validateValuePeople={validateValuePeople}
      />
      <Result
        tipAmount={tipAmount}
        total={total}
        Reset={Reset}
      />
    </div>
  )
}

export default Calculator

import React from 'react'
import ButtonTip from './ButtonTip'
import InputTip from './InputTip'

function Tip({tip, setTip, tipNumber}) {
  return (
    <div>
      <p className='text_calculate'>Select Tip %</p>
      <div className='grid grid-cols-3 gap-2'>
        <ButtonTip value={5} setTip={setTip} tip={tip} tipNumber={tipNumber}>5%</ButtonTip>
        <ButtonTip value={10} setTip={setTip} tip={tip} tipNumber={tipNumber}>10%</ButtonTip>
        <ButtonTip value={15} setTip={setTip} tip={tip} tipNumber={tipNumber}>15%</ButtonTip>
        <ButtonTip value={25} setTip={setTip} tip={tip} tipNumber={tipNumber}>25%</ButtonTip>
        <ButtonTip value={50} setTip={setTip} tip={tip} tipNumber={tipNumber}>50%</ButtonTip>
        <InputTip
          tip={tip}
          setTip={setTip}
        />
      </div>
    </div>
  )
}

export default Tip

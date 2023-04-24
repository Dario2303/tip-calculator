import React from 'react'
import ButtonTip from './ButtonTip'
import InputTip from './InputTip'

function Tip() {
  return (
    <div>
      <p className='text_calculate'>Select Tip %</p>
      <div className='grid grid-cols-3 gap-2'>
        <ButtonTip tip={5}>5%</ButtonTip>
        <ButtonTip tip={10}>10%</ButtonTip>
        <ButtonTip tip={15}>15%</ButtonTip>
        <ButtonTip tip={25}>25%</ButtonTip>
        <ButtonTip tip={50}>50%</ButtonTip>
        <InputTip/>
      </div>
    </div>
  )
}

export default Tip

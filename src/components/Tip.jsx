import React from 'react'
import ButtonTip from './ButtonTip'

function Tip() {
  return (
    <div>
      <p>Select Tip %</p>
      <div className='grid grid-cols-3 gap-2'>
        <ButtonTip tip={5}>5%</ButtonTip>
        <ButtonTip tip={10}>10%</ButtonTip>
        <ButtonTip tip={15}>15%</ButtonTip>
        <ButtonTip tip={25}>25%</ButtonTip>
        <ButtonTip tip={50}>50%</ButtonTip>
        <input type="number"/>
      </div>
    </div>
  )
}

export default Tip

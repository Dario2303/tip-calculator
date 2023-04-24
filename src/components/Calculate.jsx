import dollar from '../images/icon-dollar.svg';
import Input from './Input';
import Tip from './Tip';

function Calculate() {
  return (
      <div className='p-6'>
        <label htmlFor="tip" className='block'>Bill</label>
        <Input
            name={'tip'}
            image={dollar}
        />
        <Tip/>
      </div>
  )
}

export default Calculate

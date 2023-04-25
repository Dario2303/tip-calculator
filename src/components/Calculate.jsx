import dollar from '../images/icon-dollar.svg';
import Input from './Input';
import Tip from './Tip';
import peopleIcon from '../images/icon-person.svg'

function Calculate({bill, setBill, people, setPeople, tip, setTip}) {
  return (
      <div className="p-8 md:pr-0 flex flex-col justify-around">
        <div className='relative'>
          <label htmlFor="tip" className='block text_calculate'>Bill</label>
          <p className='absolute top-0 right-0 text-red-600 text-xs'>Can't be zero</p>
          <Input
              step={'0.01'}
              name={'tip'}
              image={dollar}
              value={bill}
              setValue={setBill}
          />
        </div>

        <Tip
          tip={tip}
          setTip={setTip}
        />

        <div className='relative'>
          <label htmlFor="people" className='block text_calculate'>Number of People</label>
          <p className='absolute top-0 right-0 text-red-600 text-xs'>Can't be zero</p>
          <Input
              name={'people'}
              image={peopleIcon}
              value={people}
              setValue={setPeople}
          />
        </div>
      </div>
  )
}

export default Calculate

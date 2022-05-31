import { useState } from 'react';

export const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [hours, setHours] = useState('');
  const [reminder, setReminder] = useState(false);

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  const onChangeDay = (event) => {
    setHours(event.target.value);
  };

  const onChangeReminder = (event) => {
    setReminder(event.currentTarget.checked);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

    if (!hours) {
      alert('Please add time');
      return;
    }

    onAdd({ text, hours, reminder });

    clearFields();
  };

  const clearFields = () => {
    setText('');
    setHours('');
    setReminder(false);
  };

  return (
    <form onSubmit={onSubmit} className='add-form'>
      <div className='form-control'>
        <label>Enter your todo</label>
        <input
          value={text}
          onChange={(e) => onChangeText(e)}
          type='text'
          placeholder='Describe your todo'
        />
      </div>

      <div className='form-control'>
        <label>How many hours you need for that?</label>
        <input
          value={hours}
          onChange={(e) => onChangeDay(e)}
          type='number'
          placeholder='Amount of hours'
        />
      </div>

      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          value={reminder}
          onChange={(e) => onChangeReminder(e)}
          type='checkbox'
          checked={reminder}
        />
      </div>

      <input className='btn-block' type='submit' value='Add todo' />
    </form>
  );
};

export default AddTask;

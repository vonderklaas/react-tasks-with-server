import { useState } from 'react';

export const AddTask = ({ onAdd }) => {

    const [ text, setText ] = useState('');
    const [ day, setDay] = useState('');
    const [ reminder, setReminder ] = useState(false);

    const onChangeText = (event) => {
        setText(event.target.value);
    }

    const onChangeDay = (event) => {
        setDay(event.target.value);
    }

    const onChangeReminder = (event) => {
        setReminder(event.currentTarget.checked);
    }

    const onSubmit = (event) => {
        event.preventDefault()
        
        if (!text) {
            alert('Please add a task!');
            return;
        }

        onAdd({
            text: text,
            day: day,
            reminder: reminder
        })

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form onSubmit={ onSubmit } className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input value={ text } onChange={ (e) => onChangeText(e) } type='text' placeholder='Add Task' />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input value={ day } onChange={ (e) => onChangeDay(e) } type='text' placeholder='Add Day & Time' />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input checked={ reminder } value={ reminder } onChange={ (e) => onChangeReminder(e) } type='checkbox' />
            </div>
            <input className='btn btn-block' type='submit' value='Save Task'/>
        </form>
    )
}

export default AddTask;
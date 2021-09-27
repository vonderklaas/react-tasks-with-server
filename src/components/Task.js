import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {

    return (
        <div onDoubleClick={ () => onToggle(task.id) } className={`task ${ task.reminder ? 'reminder' : '' }`}>
            <h3>{ task.text } <FaTimes onClick={ () => onDelete(task.id) } style={{ color: 'red', cursor: 'pointer' }} /></h3>
            <p>
                You need { task.hours } hours for this todo
            </p>
        </div>
    ) 
}

export default Task;
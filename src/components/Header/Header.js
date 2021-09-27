import { useLocation } from 'react-router-dom';
import Button from '../Button/Button';

import HeaderStyle from './Header.style';

const Header = ({ onAdd, showAddTask }) => {
    const location = useLocation()
    return (
        <HeaderStyle>
            <h1>Todo List</h1>
            {
                location.pathname === '/about' ? '' :
                <Button color={ showAddTask ? 'red' : 'rgb(81, 228, 81)' } text={ showAddTask ? 'Close' : 'Add'} onClick={ onAdd }/>
            }
        </HeaderStyle>
    )
}

export default Header;
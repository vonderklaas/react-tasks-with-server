import Button from '../Button/Button';

import HeaderStyle from './Header.style';

const Header = ({ onAdd, showAddTask }) => {
  return (
    <HeaderStyle>
      <h1>Todo List</h1>
      <Button
        color={showAddTask ? 'red' : 'rgb(81, 228, 81)'}
        text={showAddTask ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </HeaderStyle>
  );
};

export default Header;

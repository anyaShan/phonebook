import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { MenuWrap } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <MenuWrap>
      <p>Welcome, {user.name}!</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </MenuWrap>
  );
};

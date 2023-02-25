import { useAuth } from 'hooks';
import { NavWrap, NavItem } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavWrap>
      <NavItem to="/" end>
        Home
      </NavItem>
      {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>}
    </NavWrap>
  );
};

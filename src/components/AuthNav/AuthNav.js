import { NavWrap, NavItem } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavWrap>
      <NavItem to="/register" end>
        Register
      </NavItem>
      <NavItem to="/login">Log In</NavItem>
    </NavWrap>
  );
};

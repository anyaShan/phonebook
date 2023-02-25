import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrap = styled.nav`
  display: flex;
  gap: 25px;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;

  padding: 3px 15px;
  border: 1px solid #fff;
  border-radius: 10px;
  text-decoration: none;
  color: #fff;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.04em;

  &:hover,
  &:focus {
    color: #000;
  }
`;

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrap = styled.nav`
  display: flex;
  gap: 25px;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  color: #fff;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 0.06em;

  &.active {
    color: rgb(52, 162, 212);
    background-color: rgb(255, 255, 255);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: rgb(52, 162, 212);
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

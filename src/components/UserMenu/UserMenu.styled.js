import styled from 'styled-components';

export const MenuWrap = styled.nav`
  display: flex;
  gap: 25px;
  align-items: center;

  p {
    color: #fff;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0.04em;
  }

  button {
    padding: 10px;
    border: transparent;
    border-radius: 10px;

    color: #000;
    background-color: transparent;
    cursor: pointer;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.2;
    letter-spacing: 0.04em;

    &:hover,
    &:focus {
      color: #fff;
      border: 1px solid #fff;
    }
  }
`;

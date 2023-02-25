import PropTypes from 'prop-types';
import { Main } from './MainContainer.styled';

export const MainContainer = ({ children }) => {
  return <Main>{children}</Main>;
};

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

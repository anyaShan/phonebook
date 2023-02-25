import PropTypes from 'prop-types';
import { SidebarWrapper, SidebarTitle } from './Sidebar.styled';

export const Sidebar = ({ title, children }) => {
  return (
    <SidebarWrapper>
      <SidebarTitle>{title}</SidebarTitle>
      <div>{children}</div>
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

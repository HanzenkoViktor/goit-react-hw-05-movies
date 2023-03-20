import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  background-color: grey;
  padding: 50px 0;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 30px;
  font-weight: 700;
  padding: 8px 10px;
  border-radius: 10%;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: orange;
    box-shadow: 0px 0px 17px 5px rgba(255, 255, 255, 0.47);
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: orange;
    box-shadow: 0px 0px 17px 5px rgba(255, 255, 255, 0.47);
  }
`;
const Container = styled.div`
  width: 1250px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

export { Header, StyledNavLink, Container, Nav };

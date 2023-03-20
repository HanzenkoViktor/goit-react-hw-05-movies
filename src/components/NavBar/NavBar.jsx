import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, StyledNavLink, Container, Nav } from './NavBar.styled';

const NavBar = () => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </Nav>
        </Container>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default NavBar;

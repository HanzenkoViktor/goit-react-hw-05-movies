import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ListMovies = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  width: 1460px;
  justify-content: center;
  padding: 0;
  margin-bottom: 50px;
`;

const ListItemMovie = styled.li`
  border: 1px solid black;
  overflow: hidden;
  border-radius: 5%;
  text-align: center;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    box-shadow: 0px 0px 17px 5px rgba(15, 15, 15, 0.47);
  }
`;

const PosterMovie = styled.img`
  display: block;
  width: 300px;
  min-height: 450px;
`;

const TitleMovie = styled.p`
  margin: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: 600;
  font-size: 12px;
`;
const LinkDiv = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export { ListMovies, ListItemMovie, PosterMovie, TitleMovie, LinkDiv };

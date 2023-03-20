import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  width: 1250px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 24px;
  background-color: black;
  border-radius: 10%;
  padding: 7px 12px;
  margin-bottom: 20px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: red;
    box-shadow: 0px 0px 17px 5px rgba(15, 15, 15, 0.47);
  }
`;

const CartFilm = styled.div`
  display: flex;
  gap: 30px;
  padding: 30px 0;
`;

const ImgDiv = styled.div`
  width: 350px;
  overflow: hidden;
  border-radius: 10%;
`;

const Images = styled.img`
  width: 350px;
`;

const InfoDiv = styled.div`
  /* border-bottom: thick double black; */
`;

const Title = styled.h1`
  margin: 0;
`;

const Info = styled.p``;

const InfoOver = styled.p`
  width: 600px;
  padding-bottom: 30px;
  border-bottom: thick double black;
`;

const SpanInfo = styled.b`
  color: red;
  font-size: 15px;
`;

const InfoBotnDiv = styled.div`
  display: flex;
  gap: 70px;
  padding: 20px 0;
`;

const InfoNavLink = styled(NavLink)`
  text-decoration: none;
  width: 70px;
  text-align: center;
  color: white;
  font-weight: 600;
  font-size: 15px;
  background-color: black;
  border-radius: 10%;
  padding: 7px 12px;
  margin-bottom: 20px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: red;
    box-shadow: 0px 0px 17px 5px rgba(15, 15, 15, 0.47);
  }
`;

export {
  Container,
  StyledNavLink,
  CartFilm,
  ImgDiv,
  Images,
  InfoDiv,
  Title,
  Info,
  InfoOver,
  SpanInfo,
  InfoBotnDiv,
  InfoNavLink,
};

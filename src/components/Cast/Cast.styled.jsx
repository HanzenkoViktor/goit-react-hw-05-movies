import styled from 'styled-components';

const Container = styled.div`
  width: 1062px;
  padding-bottom: 50px;
`;

const TitleCast = styled.h2`
  font-size: 30px;
`;

const CastList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const ActorCart = styled.li`
  width: 150px;
  min-height: 225px;
  border: 1px solid black;
  border-radius: 10%;
  overflow: hidden;
`;

const ActorPhoto = styled.img`
  width: 150px;
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 7px 8px;
`;

const ActorName = styled.b`
  font-size: 15px;
`;

const ActorInfo = styled.span`
  font-size: 13px;
`;

const InfoSpan = styled.b`
  color: red;
  font-size: 12px;
`;

export {
  Container,
  TitleCast,
  CastList,
  ActorCart,
  ActorPhoto,
  Info,
  ActorName,
  ActorInfo,
  InfoSpan,
};

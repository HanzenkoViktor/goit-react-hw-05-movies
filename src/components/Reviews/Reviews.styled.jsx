import styled from 'styled-components';

const Container = styled.div`
  padding-bottom: 50px;
`;

const Title = styled.h2`
  font-size: 30px;
`;

const Messj = styled.p`
  font-size: 23px;
  color: white;
`;

const RevList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const RevItem = styled.li`
  border: 1px dashed black;
  border-radius: 10%;
  padding: 30px;
`;

const Name = styled.b`
  color: white;
`;

export { Container, Title, Messj, RevList, RevItem, Name };

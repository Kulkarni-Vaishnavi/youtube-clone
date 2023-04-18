import React from 'react'
import styled from 'styled-components'
import CircleIcon from '@mui/icons-material/Circle';

const Container = styled.div`
    width : 300px;
    margin-bottom : 45px;
    cursor : pointer;
`;

const Image = styled.img`
    width : 100%;
    height : 202px;
    background-color : #999;
`;

const Details = styled.div`
    display : flex;
    margin-top : 16px;
    gap: 12px;

`;

const ChannelImage = styled.img`
    width : 36px;
    height : 36px;
    border-radius : 50%;
    background-color : #999;
`;

const Texts = styled.div`

`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
export const Card = () => {
  return (
    <Container>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt7b4qdih9G-kDB1hYb9whD_nWkCdBmmW4l8kNYogJ&s'/>
        <Details>
        <ChannelImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKghVQuH0fn1jsE-yzJyOOlQ0yixDf-J9Nw1Dj0Y34Ov8bCFVacTwlzNH7uFYxmNpPai0HOk6L3hM&usqp=CAU&ec=48665698'/>
        <Texts>
            <Title>Test Video</Title>
            <ChannelName>Vaish Vlog's</ChannelName>
            <Info>660,998 views <CircleIcon sx={{fontSize: 6 }} /> 1 day ago</Info>
        </Texts>
        </Details>
    </Container>
  )
}

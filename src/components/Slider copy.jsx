import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from 'react';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
// transform: translateX(-100vw);
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
`;

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const itemsCount = 3;
  return (
    <div>
      <Container>
        <Arrow
          direction="left"
          onClick={() => {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : itemsCount-1);
          }}
        >
          <ArrowLeftOutlinedIcon />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          <Slide>
            <ImgContainer>
              <Image src="https://fakeimg.pl/600x800/" />
            </ImgContainer>
            <InfoContainer>
              <Title>SUMMER SALE</Title>
              <Desc>SUMMER IS COMING 1</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
          <Slide>
            <ImgContainer>
              <Image src="https://fakeimg.pl/600x800/" />
            </ImgContainer>
            <InfoContainer>
              <Title>AUTUMN SALE</Title>
              <Desc>SUMMER IS COMING 2</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
          <Slide>
            <ImgContainer>
              <Image src="https://fakeimg.pl/600x800/" />
            </ImgContainer>
            <InfoContainer>
              <Title>WINTER SALE</Title>
              <Desc>SUMMER IS COMING 3</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        </Wrapper>
        <Arrow
          direction="right"
          onClick={() => {
            setSlideIndex(slideIndex < itemsCount-1 ? slideIndex + 1 : 0);
          }}
        >
          <ArrowRightOutlinedIcon />
        </Arrow>
      </Container>
    </div>
  );
}

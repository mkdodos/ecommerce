import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

// display: flex;
// 在此容器內的內容可以水平並排

// position: relative;
// vh 代表 view height 高度會隨螢幕可視範圍自動調整
// height: 50vh;
const Container = styled.div`
  display: flex;
  position: relative;
  // width: 100%;
  height: 100vh;
  background-color: #acfcd9;
  // overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #55d6be;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
`;

// 水平位移
// transform: translateX(20vw)
const Wrapper = styled.div`
  display: flex;
  background-color: teal;
  transform: translateX(0vw);
`;

const Slide = styled.div`
  color: white;
  font-size: 30px;
  display: flex;
  width: 100%;
  height: 100vh;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Grid = styled.div`
  position: absolute;
  // top: 50%;
  left: 50%;
  transform: translateX(-50%);

  display: grid;
  align-content: center;
  justify-content: center;
  min-height: 100vh;
  grid-template-columns: repeat(3, 100px);
  /* grid-template-rows: minmax(120px,auto) repeat(3, 100px); */
  grid-template-rows: repeat(3, 100px);
`;

const Button = styled.button`
  font-size: 2rem;
  outline: none;
  border: 1px solid white;
  background-color: #55d6be;
  border-radius: 50%;
  &:hover{
    background-color: #fc6471;
    // background-color: #7d5ba6;
    // color:white;
  }
  
`;

export default function Slider() {
  return (
    <div>
      <Container>
        <Grid>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
        </Grid>

        {/* <Arrow direction="left">
          <ArrowLeftOutlinedIcon />
        </Arrow> */}

        {/* <Wrapper>
          <Slide>
            <ImgContainer>1</ImgContainer>
            <InfoContainer>info 1</InfoContainer>
          </Slide>
          <Slide>
            <ImgContainer>2</ImgContainer>
            <InfoContainer>info 2</InfoContainer>
          </Slide>
        </Wrapper> */}
        {/* <Arrow direction="right">
          <ArrowRightOutlinedIcon />
        </Arrow> */}
      </Container>
    </div>
  );
}

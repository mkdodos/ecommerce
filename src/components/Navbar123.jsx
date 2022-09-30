import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
  // background-color: #55d6be;
`;

// 內容寬度平均分配
// justify-content: space-between; 
const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;  
`;

const Left = styled.div`
  flex: 1;
// display: flex;
// align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
`;

const Center = styled.div`
flex: 2;
`;

const Logo = styled.div``;

const Right = styled.div`
flex: 1;
`;

export default function navbar() {
  return (
    <div>
      <Container>
        <Wrapper>          
          <Left>
          <Language>EN</Language>
          </Left>
          <Center>C</Center>
          <Right>R</Right>
        </Wrapper>
      </Container>
    </div>
  );
}

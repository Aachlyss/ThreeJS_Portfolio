import React from 'react'
import styled from 'styled-components';
import { Canvas } from "@react-three/fiber"
import Cube from './Cube';
import { OrbitControls } from '@react-three/drei';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

`;

const Title = styled.h1`
  font-size: 74px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgrey;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 110px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;  
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
        <Canvas camera={{fov:25, position: [5, 5, 5]}}>
            <OrbitControls enableZoom={false} autoRotate enablePan={false}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3, 2, 1]}/>
            <Cube/>
        </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>Who we are</Subtitle>
          </WhatWeDo>
          <Desc>a creative group of designers and developers with a passion for the arts.</Desc>
          <Button>See our works.</Button>        </Right>
      </Container>
    </Section>
  )
}

export default Who
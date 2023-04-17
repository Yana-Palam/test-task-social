import React from 'react';

import Container from 'components/Container/Container';
import { Wrapper, Title, Text, Wrp, WrapperBG } from './HomePage.styled';

function HomePage() {
  return (
    <Container>
      <Wrapper>
        <Wrp>
          <Title>Welcome to tweets!</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            eos ea ad inventore, eum eligendi deserunt velit dolor perferendis
            odio exercitationem aspernatur, cumque veniam quod doloremque, totam
            pariatur autem molestias!
          </Text>
        </Wrp>

        <WrapperBG />
      </Wrapper>
    </Container>
  );
}

export default HomePage;

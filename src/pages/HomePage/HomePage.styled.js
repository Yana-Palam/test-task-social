import styled from 'styled-components';
import background from '../../assets/images/picture.png';

export const Wrapper = styled.div`
  position: relative;
`;

export const WrapperBG = styled.div`
  opacity: 0.2;
  background-image: url(${background});
  margin-bottom: 30px;
  height: calc(100vh - 136px);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
`;

export const Wrp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Title = styled.h1`
  font-weight: 600;
  text-align: center;
  font-size: 30px;
  color: var(--mainColor);
`;

export const Text = styled.p`
  width: 800px;
  font-size: 20px;
  color: var(--mainColor);
  margin-bottom: 20px;
  text-align: center;
`;

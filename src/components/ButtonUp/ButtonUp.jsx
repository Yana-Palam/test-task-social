import React from 'react';
import { AiOutlineUp } from 'react-icons/ai';

import { ButtonStyled } from './ButtonUp.styled';

function ButtonUp() {
  const onClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <ButtonStyled onClick={onClick} type="button">
      <AiOutlineUp size={24} color="#4b2a99" />
    </ButtonStyled>
  );
}

export default ButtonUp;

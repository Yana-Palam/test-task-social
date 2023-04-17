import styled from 'styled-components';

export const Button = styled.button`
  background-color: #4b2a99;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
  border: none;
  /* margin-bottom: 30px; */
  padding: 14px 28px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

export const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const FilterWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-wrap: wrap; */
`;

export const ButtonGoBack = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #4b2a99;
  background: transparent;
  cursor: pointer;
  border: none;

  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

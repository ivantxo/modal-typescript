import styled from 'styled-components';

export const StyledModalOverLay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  opacity: 1;
  animation: show .5s ease;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const StyledModal = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 0.625rem, rgba(0, 0, 0, 0.2);

  @media (min-width: 576px) {
    width: 32rem;
  },
`;

export const StyledFooter = styled.div`
  position: absolute,
  bottom: 20
`;

export const StyledButton = styled.button`
  padding: 1rem 1.8rem;
  background: #568db2;
  border: 0;
  border-radius: 0.3rem;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0.8rem;

  &:hover {
    background: #466d87;
  }
`;

export const StyledModalHeader = styled.div`
  color: white;
  background: #333;
  line-height: 50px;
  text-align: center;
  position: relative;
  top: -221px;
  height: 50px;
  box-sizing: border-box;

  a {
    position: absolute;
    top: 0;
    right: 0;
    text-decoration: none;
    color:white;
    font-weight: bold;
    display: block;
    padding: 0 20px;
    font-size:16px;
    background: #555;
    height: 100%;  
  }
`;

import styled from "styled-components";

export const HeaderStyled = styled.h1`
  text-align: center;
`;

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const BoxRow = styled.div`
  display: flex;
  width: 300px;
  margin: 5px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Box = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #000;
`;

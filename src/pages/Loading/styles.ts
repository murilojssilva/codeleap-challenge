import styled from "styled-components";

export const LoadingContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.shape};
  height: 100vh;
  width: 100vw;
`;

import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 80px;
  width: 800px;
  padding: 1rem;

  background-color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;

  h3 {
    color: ${(props) => props.theme.colors.shape};
  }
`;

import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 111px;
  height: 33px;
  border: 0;
  background: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.shape};
`;

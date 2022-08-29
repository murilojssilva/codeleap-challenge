import styled from "styled-components";

export const SignUpContainer = styled.main`
  width: 500px;
  height: 220px;
  padding: 1rem;
  gap: 2rem;
  background-color: ${(props) => props.theme.colors.shape};
  display: flex;
  flex-direction: column;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    button {
      align-self: flex-end;
    }
  }
`;

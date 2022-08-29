import styled from "styled-components";

export const AddItemContainer = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    button {
      align-self: flex-end;
    }
  }
  border: 1px solid ${(props) => props.theme.colors.border};
`;

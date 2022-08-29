import styled from "styled-components";

export const TextareaContainer = styled.textarea`
  border: 1px solid ${(props) => props.theme.colors.input};
  border-radius: 4px;
  padding: 0 0.25rem;
  resize: none;
`;

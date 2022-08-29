import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  gap: 1rem;
  background-color: ${(props) => props.theme.colors.shape};
  width: 800px;
`;

export const ItemContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  width: 100%;
  flex-direction: column;
`;

export const ItemContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  p {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    line-break: anywhere;
  }
`;

export const ItemButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  button {
    background-color: transparent;
    align-items: center;
    border: 0;
    overflow: hidden;
    color: ${(props) => props.theme.colors.shape};
  }
`;

export const ItemTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.input};
`;

export const ItemHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.shape};
  padding: 1rem;
`;

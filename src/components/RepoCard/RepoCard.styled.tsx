import styled from "styled-components";

export const Root = styled.div`
  border: 1px solid gray;
  padding: 3px 5px;

  &:hover {
    background: #fdcdcd;
  }
`;

export const ButtonAdd = styled.button`
  background: #3eb60d;
  padding: 10px;
  color: #3a3434;
  font-weight: bold;
`;

export const ButtonRemove = styled.button`
  background: #f82f03;
  padding: 10px;
  color: white;
  font-weight: bold;
`;

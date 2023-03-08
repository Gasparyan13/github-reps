import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
`;

export const Button = styled.button<any>`
  width: 40px;
  height: 40px;
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  margin: 0 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #eee;
  border-color: #eee;
  &:active {
    font-weight: 900;
    border-color: #101010;
    background: #ffe400;
    color: #101010;
  }
  background-color: ${(props) => (props.active ? "red" : "black")};
`;

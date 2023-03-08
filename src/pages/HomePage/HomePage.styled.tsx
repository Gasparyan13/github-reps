import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  margin: 0 auto;
`;

export const Input = styled.input`
  position: relative;
  padding: 3px;
  width: 550px;
  height: 42px;
  margin-bottom: 2px;
`;

export const Option = styled.ul`
  list-style: none;
  position: absolute;
  top: 35px;
  left: 0;
  right: 0;
  max-height: 200px;
  overflow-y: scroll;
  padding-left: 0;
  border: 1px solid gray;
  background-color: white;
`;

export const Item = styled.li`
  padding: 7px 10px;
  &:hover {
    background: #8f8888;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;

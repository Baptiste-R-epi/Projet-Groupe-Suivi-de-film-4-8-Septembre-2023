import styled from "styled-components";

export const TextInput = styled.input`
  width: 45%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 16px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border: 1px solid #333;
  }
`;

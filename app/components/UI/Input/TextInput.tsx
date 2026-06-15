import styled from "styled-components";

interface InputProps {
  $hasError?: Boolean
}

const TextInput = styled.input<InputProps>`
  width: 100%;
  border: ${(props) => (props.$hasError ? "1px solid red" : "1px solid black")};
  outline: none;
  padding: 0.25rem 0.5rem;
  background: transparent;
  color: #333;
  placeholder: ${(props) => (props ? props.placeholder : "i am place holder")};
`;

export default TextInput;

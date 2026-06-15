import styled from "styled-components";

const fontSize = {
  sm: "0.8rem",
  md: "1rem",
  lg: "1.3rem",
};

const Label = styled.label`
  font-family: Arial;
  font-size: ${(props) => fontSize[props] ?? "1rem"};
  color: #222;
`;


export default Label
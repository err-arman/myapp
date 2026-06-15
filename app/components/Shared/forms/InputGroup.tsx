import styled from "styled-components";
import TextInput from "../../UI/Input/TextInput";
import Label from "@/app/components/UI/Input/Label";
import Text from "../../UI/Text/Text";

const Container = styled.div`
  with: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled.div`
  color: red;
`;
function InputGroup({
  name,
  placeholder,
  value,
  label,
  onBlue,
  onChange,
  errorMessage,
  hasError,
  handleOnFocus,
}: {
  name: string;
  placeholder?: string;
  value: any;
  label: string;
  onChange?: any;
  onBlur?: any;
  onBlue?: any;
  errorMessage?: string;
  handleOnFocus?: any;
  hasError?: boolean;
}) {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <TextInput
        name={name}
        id={name}
        placeholder={placeholder ? placeholder : ""}
        value={value}
        onChange={onChange}
        onBlur={onBlue}
        onFocus={handleOnFocus}
        $hasError={hasError}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}

export default InputGroup;

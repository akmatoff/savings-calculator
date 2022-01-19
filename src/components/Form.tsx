import { useState } from "react";
import styled from "styled-components";

export default function Form() {
  const [amount, setAmount] = useState<string>("");

  return (
    <StyledForm>
      <label>Total amount</label>
      <Field>
        <div>$</div>
        <StyledInput
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Field>
      <label>Reach goal by</label>
      <Field>
        <div>&lt;</div>
        <StyledInput />
        <div>&gt;</div>
      </Field>
    </StyledForm>
  );
}

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  label {
    font-size: 14px;
    line-height: 17px;
    color: #102c51;
  }
`;

const Field = styled.div`
  display: flex;
  width: 308px;
  height: 42px;
  margin-bottom: 15px;
  border: 1px solid #cfcfcf;
  border-radius: 4px;

  div {
    width: 42px;
    height: 40px;
    display: grid;
    place-content: center;
    background: #f4f8fa;
    border-radius: 4px 0px 0px 4px;
    color: #828282;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  text-align: center;
  outline: none;
  border: none;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;

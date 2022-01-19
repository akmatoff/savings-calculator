import styled from "styled-components";

import ToggleSwitch from "./ToggleSwitch";
import Form from "./Form";
import Card from "./Card";
import Button from "./Button";

export default function Container() {
  return (
    <StyledContainer>
      <h1>
        Savings <br /> calculator
      </h1>
      <div style={{ display: "flex" }}>
        <ToggleSwitch />
        <span>Calculate by total amount</span>
      </div>
      <Form />
      <Card />
      <Button />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 400px;
  height: 606px;
  padding: 36px 45px;
  background: #fffefe;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 6px;

  h1 {
    font-size: 30px;
    font-weight: normal;
    line-height: 37px;
  }

  span {
    margin-left: 5px;
    font-size: 14px;
    line-height: 17px;
    color: #102c51;
  }
`;

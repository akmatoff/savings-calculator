import { useState } from "react";
import styled from "styled-components";
import { StyledToggleSwitchProps } from "../types/types";

export default function ToggleSwitch() {
  const [toggleOn, setToggleOn] = useState<boolean>(true);

  return (
    <StyledToggleSwitch
      toggleOn={toggleOn}
      onClick={() => setToggleOn(!toggleOn)}
    >
      <div></div>
    </StyledToggleSwitch>
  );
}

const StyledToggleSwitch = styled.div<StyledToggleSwitchProps>`
  width: 38px;
  height: 18px;
  padding: 1px;
  padding-left: ${({ toggleOn }) => (toggleOn ? "21px" : "1px")};
  background: "#FFFFFF";
  border: 1px solid #cfcfcf;
  border-radius: 9px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  div {
    width: 14px;
    height: 14px;
    background: ${({ toggleOn }) => (toggleOn ? "#2f80ed" : "#cfcfcf;")};
    border-radius: 100%;
  }

  span {
    font-size: 14px;
    line-height: 17px;
    color: #102c51;
  }
`;

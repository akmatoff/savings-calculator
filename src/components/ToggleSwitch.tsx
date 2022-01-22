import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AppDispatch, RootState } from "../redux/store";
import { switchToggle } from "../redux/calcSlice";
import { StyledToggleSwitchProps } from "../types/types";

export default function ToggleSwitch() {
  const toggledOn = useSelector((state: RootState) => state.calc.modeToggledOn);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <StyledToggleSwitch
      data-testid="toggle-switch"
      toggledOn={toggledOn}
      onClick={() => dispatch(switchToggle())}
    >
      <div></div>
    </StyledToggleSwitch>
  );
}

const StyledToggleSwitch = styled.div<StyledToggleSwitchProps>`
  width: 38px;
  height: 18px;
  padding: 1px;
  padding-left: ${({ toggledOn }) => (toggledOn ? "21px" : "1px")};
  background: "#FFFFFF";
  border: 1px solid #cfcfcf;
  border-radius: 9px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  div {
    width: 14px;
    height: 14px;
    background: ${({ toggledOn }) => (toggledOn ? "#2f80ed" : "#cfcfcf;")};
    border-radius: 100%;
  }

  span {
    font-size: 14px;
    line-height: 17px;
    color: #102c51;
  }
`;

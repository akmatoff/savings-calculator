import styled from "styled-components";

export default function ToggleSwitch() {
  return (
    <StyledToggleSwitch>
      <div></div>
    </StyledToggleSwitch>
  );
}

const StyledToggleSwitch = styled.div`
  width: 38px;
  height: 18px;
  padding: 1px;
  background: "#FFFFFF";
  border: 1px solid #cfcfcf;
  border-radius: 9px;
  cursor: pointer;

  div {
    width: 14px;
    height: 14px;
    background: #2f80ed;
    border-radius: 100%;
  }

  span {
    font-size: 14px;
    line-height: 17px;
    color: #102c51;
  }
`;

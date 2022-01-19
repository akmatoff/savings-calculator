import styled from "styled-components";

export default function Button() {
  return <StyledButton>Finish</StyledButton>;
}

const StyledButton = styled.div`
  display: grid;
  place-content: center;
  width: 308px;
  height: 42px;
  margin-top: 24px;
  background: #2f80ed;
  border-radius: 10px;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #f2f2f2;
`;

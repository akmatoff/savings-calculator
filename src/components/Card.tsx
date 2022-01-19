import styled from "styled-components";

export default function Card() {
  return (
    <StyledCard>
      <Row>
        <Label>Monthly amount</Label>
        <MonthlyAmount>$961.53</MonthlyAmount>
      </Row>
      <Description>
        You are planning 26 montly deposits to reach your $25, 000 goal by April
        2022.
      </Description>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 308px;
  height: 145px;
  border: 1px solid #cfcfcf;
  box-sizing: border-box;
  filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.03));
  border-radius: 4px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const Label = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: #102c51;
`;

const MonthlyAmount = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  color: #2f80ed;
`;

const Description = styled.div`
  width: 308px;
  height: 47px;
  padding: 10px 25px;
  background: #f4f8fa;
  border-radius: 0px 0px 4px 4px;
  font-size: 10px;
  font-weight: bold;
  line-height: 14px;
  color: #102c51;
`;

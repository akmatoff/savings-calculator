import { useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "../redux/store";

export default function Card() {
  const modeToggledOn = useSelector(
    (state: RootState) => state.calc.modeToggledOn
  );
  const savings = useSelector((state: RootState) => state.calc.savings);
  const monthlyAmount = useSelector(
    (state: RootState) => state.calc.monthlyAmount
  );
  const goalReachDate = useSelector(
    (state: RootState) => state.calc.goalReachDate
  );

  return modeToggledOn ? (
    <StyledCard>
      <Row>
        <Label>Monthly Amount</Label>
        <MonthlyAmount>${monthlyAmount}</MonthlyAmount>
      </Row>
      <Description>
        You are planning 26 montly deposits to reach your $25, 000 goal by April
        2022.
      </Description>
    </StyledCard>
  ) : (
    <StyledCard>
      <Row>
        <Label>Savings</Label>
        <MonthlyAmount>${savings}</MonthlyAmount>
      </Row>
      <Description>
        You are saving ${savings} by{" "}
        {goalReachDate.toLocaleString("default", { month: "long" }) +
          " " +
          goalReachDate.getFullYear()}
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
  width: 306px;
  height: 47px;
  padding: 10px 25px;
  background: #f4f8fa;
  border-radius: 0px 0px 4px 4px;
  font-size: 10px;
  font-weight: bold;
  line-height: 14px;
  color: #102c51;
`;

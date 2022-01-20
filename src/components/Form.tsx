import { forwardRef } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  setTotalAmount,
  setGoalReachDate,
  setMonthlyDeposit,
} from "../redux/calcSlice";

export default function Form() {
  const totalAmount = useSelector((state: RootState) => state.calc.totalAmount);
  const monthlyDeposit = useSelector(
    (state: RootState) => state.calc.monthlyDeposit
  );
  const modeToggledOn = useSelector(
    (state: RootState) => state.calc.modeToggledOn
  );
  const goalReachDate = useSelector(
    (state: RootState) => state.calc.goalReachDate
  );

  const dispatch = useDispatch<AppDispatch>();

  // Custom date input for the react datepicker
  const DateInput = forwardRef<
    HTMLInputElement,
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  >(({ value, onClick, onChange }, ref) => (
    <StyledInput
      ref={ref}
      onClick={onClick}
      onChange={onChange}
      value={value}
    />
  ));

  const addToDate = () => {
    dispatch(
      setGoalReachDate(
        new Date(goalReachDate.setMonth(goalReachDate.getMonth() + 1))
      )
    );
  };

  const subtractFromDate = () => {
    dispatch(
      setGoalReachDate(
        new Date(goalReachDate.setMonth(goalReachDate.getMonth() - 1))
      )
    );
  };

  return (
    <StyledForm>
      <label>{modeToggledOn ? "Total amount" : "Monthly deposit"}</label>
      <Field>
        <InputButton>$</InputButton>
        <StyledInput
          type="number"
          value={modeToggledOn ? totalAmount : monthlyDeposit}
          onChange={(e) =>
            modeToggledOn
              ? dispatch(setTotalAmount(e.target.value))
              : dispatch(setMonthlyDeposit(e.target.value))
          }
        />
      </Field>
      <label>Reach goal by</label>
      <Field>
        <InputButton onClick={subtractFromDate}>&lt;</InputButton>
        <DatePicker
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          selected={goalReachDate}
          onChange={(date: Date) => dispatch(setGoalReachDate(date))}
          customInput={<DateInput />}
        />
        <InputButton onClick={addToDate}>&gt;</InputButton>
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
`;

const InputButton = styled.div`
  width: 42px;
  height: 40px;
  display: grid;
  place-content: center;
  background: #f4f8fa;
  border-radius: 4px 0px 0px 4px;
  color: #828282;
  cursor: pointer;
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
  background: none;
`;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalcState } from "../types/types";

const initialState: CalcState = {
  modeToggledOn: true,
  totalAmount: 0,
  monthlyDeposit: 0,
  goalReachDate: new Date(Date.now()),
  monthlyAmount: 0,
  savings: 0,
  monthsCount: 0
}

const calcSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    switchToggle: (state) => {
      return {...state, modeToggledOn: !state.modeToggledOn}
    },
    setMonthlyDeposit: (state, action: PayloadAction<number>) => {
      return {...state, monthlyDeposit: action.payload}
    },
    setTotalAmount: (state, action: PayloadAction<number>) => {
      return {...state, totalAmount: action.payload}
    },
    setGoalReachDate: (state, action: PayloadAction<Date>) => {
      return {...state, goalReachDate: action.payload}
    },
    calculate: (state) => {
      const currentDate = new Date(Date.now());
      var monthsCount = (state.goalReachDate.getFullYear() - currentDate.getFullYear()) * 12;  
        monthsCount -= currentDate.getMonth();
        monthsCount += state.goalReachDate.getMonth();

      return {...state, savings: (state.monthlyDeposit * monthsCount), monthlyAmount: (state.totalAmount / monthsCount), monthsCount: monthsCount}
    }
  }
})

export const { switchToggle, setTotalAmount, setMonthlyDeposit, setGoalReachDate, calculate } = calcSlice.actions;

export default calcSlice.reducer;
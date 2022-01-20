import { createSlice } from "@reduxjs/toolkit";
import { CalcState } from "../types/types";

const initialState: CalcState = {
  modeToggledOn: true,
  totalAmount: 0,
  monthlyDeposit: 0,
  goalReachDate: new Date(),
  monthlyAmount: 0
}

const calcSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    switchToggle: (state) => {
      return {...state, modeToggledOn: !state.modeToggledOn}
    },
    setMonthlyDeposit: (state, action) => {
      return {...state, monthlyDeposit: action.payload}
    },
    setTotalAmount: (state, action) => {
      return {...state, totalAmount: action.payload}
    },
    setGoalReachDate: (state, action) => {
      return {...state, goalReachDate: action.payload}
    }
  }
})

export const { switchToggle, setTotalAmount, setMonthlyDeposit, setGoalReachDate } = calcSlice.actions;

export default calcSlice.reducer;
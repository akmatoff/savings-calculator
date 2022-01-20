import { createSlice } from "@reduxjs/toolkit";
import { CalcState } from "../types/types";

const initialState: CalcState = {
  modeToggledOn: true,
  totalAmount: "",
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
    setTotalAmount: (state, action) => {
      if (state.totalAmount[0] === '0' && action.payload === '0') return;
      return {...state, totalAmount: action.payload}
    },
    setGoalReachDate: (state, action) => {
      return {...state, goalReachDate: action.payload}
    }
  }
})

export const { switchToggle, setTotalAmount, setGoalReachDate } = calcSlice.actions;

export default calcSlice.reducer;
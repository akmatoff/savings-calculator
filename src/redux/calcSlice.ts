import { createSlice } from "@reduxjs/toolkit";
import { CalcState } from "../types/types";

const initialState: CalcState = {
  modeToggledOn: true,
  totalAmount: 0,
  goalReachDate: new Date(),
  monthlyAmount: 0
}

const calcSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {}
})

export default calcSlice.reducer;
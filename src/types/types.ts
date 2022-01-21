export interface StyledToggleSwitchProps {
  toggledOn: boolean;
}

export interface CalcState {
  modeToggledOn: boolean;
  totalAmount: number;
  monthlyDeposit: number;
  goalReachDate: Date;
  monthlyAmount: number;
  savings: number;
  monthsCount: number;
}
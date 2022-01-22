import { fireEvent } from "@testing-library/react";
import { render, screen } from "../../test-utils";
import Container from "../Container";

test("includes heading", () => {
  render(<Container />);

  const heading = screen.getByText(/Savings calculator/i);
  expect(heading).toBeInTheDocument();
});

test("includes toggle switch", () => {
  render(<Container />);

  const toggleSwitch = screen.getByText(
    /Calculate by total amount|Calculate by monthly deposit/gi
  );
  expect(toggleSwitch).toBeInTheDocument();
});

test("The result is $657.89 when total amount is set to 25000 and date to March 2025", () => {
  render(<Container />);

  const input = screen.getByTestId("amount-input");
  const dateInput = screen.getByTestId("date-input");
  const calcResult = screen.getByTestId("result");

  fireEvent.change(dateInput, { target: { value: "March 2025" } });
  fireEvent.change(input, { target: { value: 25000 } });

  expect(calcResult.innerHTML).toBe("$657.89");
});

test("The result is $7600.00 when monthly deposit is set to 200 and date to March 2025", () => {
  render(<Container />);

  const input = screen.getByTestId("amount-input");
  const dateInput = screen.getByTestId("date-input");
  const calcResult = screen.getByTestId("result");
  const toggleSwitch = screen.getByTestId("toggle-switch");

  fireEvent.click(toggleSwitch);
  fireEvent.change(dateInput, { target: { value: "March 2025" } });
  fireEvent.change(input, { target: { value: 200 } });

  expect(calcResult.innerHTML).toBe("$7600.00");
});

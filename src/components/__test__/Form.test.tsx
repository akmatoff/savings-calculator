import { render, screen, fireEvent } from "../../test-utils";
import Form from "../Form";

test("includes amount input", () => {
  render(<Form />);

  const input = screen.getByLabelText(/Total amount|Monthly Deposit/gi);
  expect(input).toBeInTheDocument();
});

test("includes date input", () => {
  render(<Form />);

  const input = screen.getByLabelText(/Reach goal by/gi);
  expect(input).toBeInTheDocument();
});

test("Input displays what user types", () => {
  render(<Form />);

  const input = screen.getByTestId("amount-input");
  const dateInput = screen.getByTestId("date-input");

  fireEvent.change(input, { target: { value: "25000" } });
  fireEvent.change(dateInput, { target: { value: "March 2025" } });

  expect(input).toHaveValue(25000);
  expect(dateInput).toHaveValue("March 2025");
});

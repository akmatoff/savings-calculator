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

test("includes amount input", () => {
  render(<Container />);

  const input = screen.getByLabelText(/Total amount|Monthly Deposit/gi);
  expect(input).toBeInTheDocument();
});

test("includes date input", () => {
  render(<Container />);

  const input = screen.getByLabelText(/Reach goal by/gi);
  expect(input).toBeInTheDocument();
});

test("includes result", () => {
  render(<Container />);

  const calcResult = screen.getByTestId("result");
  expect(calcResult).toBeInTheDocument();
});

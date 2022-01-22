import { render, screen } from "../../test-utils";
import Card from "../Card";

test("includes result", () => {
  render(<Card />);

  const calcResult = screen.getByTestId("result");
  expect(calcResult).toBeInTheDocument();
});

test("result is always a number", () => {
  render(<Card />);

  const result = screen.getByTestId("result");

  expect(result).not.toBeNaN();
  expect(result).not.toBeUndefined();
  expect(result).not.toBeNull();
});

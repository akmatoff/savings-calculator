import { render, screen } from "@testing-library/react";
import Container from "../Container";

test("includes heading", () => {
  render(<Container />);

  const heading = screen.getByText(/Savings calculator/i);
  expect(heading).toBeInTheDocument();
});

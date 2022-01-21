import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders heading text", () => {
  render(<App />);
  const heading = screen.getByText(/Let's plan your saving goal/i);
  expect(heading).toBeInTheDocument();
});

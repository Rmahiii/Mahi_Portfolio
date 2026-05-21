import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio identity", async () => {
  render(<App />);

  expect(
    await screen.findByRole("heading", { name: /Mahi Raj/i, level: 1 }, { timeout: 5000 })
  ).toBeInTheDocument();
});

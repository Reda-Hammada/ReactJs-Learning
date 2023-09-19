import { screen, render } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("counter", () => {
  test("render correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    const incrementButtonElement = screen.getByRole("button", {
      name: "Increment",
    });

    expect(countElement).toBeInTheDocument();
    expect(incrementButtonElement).toBeInTheDocument();
  });

  test("render count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");

    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const countElement = screen.getByRole("heading");

    await userEvent.click(incrementButton);
    expect(countElement).toHaveTextContent("1");
  });
});

test("render ten count increments", async () => {
  render(<Counter />);
  const incrementButton = screen.getByRole("button", {
    name: "Increment",
  });

  for (let i = 0; i < 10; i++) {
    await userEvent.click(incrementButton);
  }

  const countElement = screen.getByRole("heading");
  expect(countElement).toHaveTextContent("10");
});

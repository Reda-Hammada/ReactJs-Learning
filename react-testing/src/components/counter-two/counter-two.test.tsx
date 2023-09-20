import { screen, render } from "@testing-library/react";
import CounterTwo from "./CounterTwo";
import userEvent from "@testing-library/user-event";
describe("counter two", () => {
  test("render correctly", () => {
    render(<CounterTwo count={10} />);

    const textEelemt = screen.getByText("10");
    expect(textEelemt).toHaveTextContent("10");
  });

  test("hanlders are called", async () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    const reset = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
        reset={reset}
      />
    );

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });
    const resetButton = screen.getByRole("button", { name: "reset" });

    await userEvent.click(incrementButton);
    await userEvent.click(decrementButton);
    await userEvent.click(resetButton);

    expect(decrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
    expect(reset).toHaveBeenCalledTimes(1);

    screen.debug();
  });
});

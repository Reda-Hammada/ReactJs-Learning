import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);
    const headingElement = screen.getByTestId("heading");
    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    const jobLocationElement = screen.getByRole("combobox");
    const termsElement = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    const submitButtonElement = screen.getByRole("button");
    const nameElementByValue = screen.getByDisplayValue("reda");

    expect(headingElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(bioElement).toBeInTheDocument();
    expect(jobLocationElement).toBeInTheDocument();
    expect(termsElement).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();
    expect(nameElementByValue).toBeInTheDocument();
  });
});

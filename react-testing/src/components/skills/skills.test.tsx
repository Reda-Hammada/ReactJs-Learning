import {
  screen,
  render,
  fireEvent,
  findByRole,
  
} from "@testing-library/react";
import Skills from "./Skills";

const skills = ["HTML", "CSS", "JavaScript", "PHP"];
describe("Skills component test", () => {
  test("component rendered correctly", () => {
    render(<Skills skills={skills} />);
  });

  test("render List", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("render list of skills", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getAllByRole("listitem");
    expect(listElement).toHaveLength(skills.length);
  });

  test("render login button", () => {
    render(<Skills skills={skills} />);
    const loginButtonElement = screen.getByRole("button", {
      name: "Login",
    });

    expect(loginButtonElement).toBeInTheDocument();
  });

  test("start learning button not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningButtonElement = screen.queryByRole("button", {
      name: "Start Learning",
    });

    expect(startLearningButtonElement).not.toBeInTheDocument();
  });

  test("login button functionality", async () => {
    render(<Skills skills={skills} />);
    let isLoggedIn = false;
    expect(isLoggedIn).toBeFalsy();

    fireEvent.click(screen.getByText(/Login/i));
    isLoggedIn = true;
    const startLearningButtonElement = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      { timeout: 5000 }
    );
    expect(startLearningButtonElement).toBeInTheDocument();
    expect(isLoggedIn).toBeTruthy();

  });
});

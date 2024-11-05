import { render, screen, fireEvent } from "@testing-library/react";
import Registration from "./Registration";
 

describe("first test for registration", () => {
  test("should check the on button click the next input box appear or not", () => {
    render(<Registration />);
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
    fireEvent.change(
      screen.getByRole("textbox", {
        name: "names",
        target: { value: "Ram" },
      })
    );
  });
});

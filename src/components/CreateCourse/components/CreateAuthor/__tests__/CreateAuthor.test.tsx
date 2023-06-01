import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { CreateAuthor } from "../CreateAuthor";

describe("CreateAuthor", () => {
  it("should call onCreateAuthor when create button is clicked with valid name", () => {
    const onCreateAuthorMock = jest.fn();
    render(<CreateAuthor onCreateAuthor={onCreateAuthorMock} />);

    const nameInput = screen.getByTestId(
      "createAuthorInput"
    ) as HTMLInputElement;
    const createButton = screen.getByTestId("createAuthorButton");

    // Enter a valid name in the input field
    fireEvent.change(nameInput, { target: { value: "John" } });

    // Click the create button
    fireEvent.click(createButton);

    // Assert that onCreateAuthor is called with the correct data
    expect(onCreateAuthorMock).toHaveBeenCalledWith({
      name: "John",
      id: expect.any(String),
    });

    // Assert that the input field is cleared
    expect(nameInput.value).toBe("");
  });

  it("should not call onCreateAuthor when create button is clicked with an empty name", () => {
    const onCreateAuthorMock = jest.fn();
    render(<CreateAuthor onCreateAuthor={onCreateAuthorMock} />);

    const createButton = screen.getByTestId("createAuthorButton");

    // Click the create button without entering a name

    fireEvent.click(createButton);

    // Assert that onCreateAuthor is not called
    expect(onCreateAuthorMock).not.toHaveBeenCalled();
  });
});

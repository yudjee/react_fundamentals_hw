import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBar } from "../SearchBar";

test("SearchBar renders correctly", () => {
  const onAddClick = jest.fn();
  render(<SearchBar onAddClick={onAddClick} />);

  const inputElement = screen.getByRole("textbox");
  const searchButtonElement = screen.getByText("Search");
  const addButtonElement = screen.getByText("Add new courses");

  expect(inputElement).toBeInTheDocument();
  expect(searchButtonElement).toBeInTheDocument();
  expect(addButtonElement).toBeInTheDocument();
});

test("SearchBar handles input change correctly", () => {
  const onAddClick = jest.fn();
  render(<SearchBar onAddClick={onAddClick} />);

  const inputElement = screen.getByRole("textbox") as HTMLInputElement;

  fireEvent.change(inputElement, {
    target: { value: "test" },
  });

  expect(inputElement.value).toBe("test");
});

test("SearchBar calls onAddClick correctly", () => {
  const onAddClick = jest.fn();
  render(<SearchBar onAddClick={onAddClick} />);

  const addButtonElement = screen.getByText("Add new courses");
  fireEvent.click(addButtonElement);

  expect(onAddClick).toHaveBeenCalledTimes(1);
});

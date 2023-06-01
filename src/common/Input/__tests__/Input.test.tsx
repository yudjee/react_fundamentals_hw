import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { Input } from "../Input";

describe('Input component', () => {
  const placeholderTextMock = 'Enter a value';

  test("should render input with provided label text", () => {
    render(<Input labelText="Test Input" placeholderText={placeholderTextMock} />);

    const inputElement = screen.getByLabelText("Test Input");
    expect(inputElement).toBeInTheDocument();
  });

  test("should render input with provided placeholder text", () => {
    const { getByPlaceholderText } = render(
      <Input labelText='Test Input' placeholderText={placeholderTextMock} />
    );

    expect(getByPlaceholderText(placeholderTextMock)).toBeInTheDocument();
  });

  test("Should call provided callback for onChange event", () => {
    const handleChange = jest.fn();

    render(<Input labelText="Test Input" onChange={handleChange} placeholderText={placeholderTextMock}/>);

    const inputElement = screen.getByLabelText("Test Input") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "Hello" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(inputElement.value).toBe("Hello");
  });
})



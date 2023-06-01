import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe('Header component', () => {
  test("Should render logo", () => {
    render(<Header />);

    const imageElement = screen.getByRole("img");

    expect(imageElement).toBeInTheDocument();
  });

  test("Should render logout button", () => {
    render(<Header />);

    const logoutButtonElement = screen.getByRole("button");

    expect(logoutButtonElement).toBeInTheDocument();
  });
})



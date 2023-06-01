import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CourseCard } from "../CourseCard";

describe('CourseCard component', () => {
  const course = {
    id: "1",
    title: "Course Title",
    description: "Course Description",
    creationDate: "08/03/2021",
    duration: 60,
    authors: [
      "27cc3006-e93a-4748-8ca8-73d06aa93b6d",
      "f762978b-61eb-4096-812b-ebde22838167",
    ],
  };

  test("Should contain title", () => {
    render(<CourseCard course={course} />);

    const titleElement = screen.getByText("Course Title");

    expect(titleElement).toBeInTheDocument();
  });

  test("Should contain description", () => {
    render(<CourseCard course={course} />);
    const descriptionElement = screen.getByText("Course Description");
    expect(descriptionElement).toBeInTheDocument();
  });

  test("Should contain duration", () => {
    render(<CourseCard course={course} />);

    const durationElement = screen.getByText(/01:00 hour/);

    expect(durationElement).toBeInTheDocument();
  });

  test("Should contain date", () => {
    render(<CourseCard course={course} />);

    const creationDateElement = screen.getByText(/08.03.2021/);

    expect(creationDateElement).toBeInTheDocument();
  });

  test("Should contain authors list", () => {
    render(<CourseCard course={course} />);

    const creationDateElement = screen.getByText(/Vasiliy Dobkin, Nicolas Kim/);

    expect(creationDateElement).toBeInTheDocument();
  });

  test("Should contain authors list", () => {
    render(<CourseCard course={course} />);

    const creationDateElement = screen.getByText(/Show course/);

    expect(creationDateElement).toBeInTheDocument();
  });
})


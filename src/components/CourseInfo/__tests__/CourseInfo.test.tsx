import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CourseInfo } from "../CourseInfo";
import { AuthorItemType, CourseItemType } from "../../../types";
import { formatCreationDate, getCourseDuration } from "../../../helpers";

const authorsList: AuthorItemType[] = [
  { id: "1", name: "Author 1" },
  { id: "2", name: "Author 2" },
  { id: "3", name: "Author 3" },
  { id: "4", name: "Author 4" },
];

const course: CourseItemType = {
  id: "1",
  title: "Course Title",
  description: "Course Description",
  authors: ["1", "3"],
  creationDate: "08/03/2021",
  duration: 120,
};

describe("CourseInfo", () => {
  test("renders title correctly", () => {
    render(<CourseInfo course={course} authorsList={authorsList} />);

    const courseTitle = screen.getByRole("heading", { level: 1 });

    expect(courseTitle.textContent).toBe("Course Title");
  });

  test("renders description correctly", () => {
    render(<CourseInfo course={course} authorsList={authorsList} />);

    const courseDescription = screen.getByText("Course Description");

    expect(courseDescription).toBeInTheDocument();
  });

  test("renders course duration correctly", () => {
    render(<CourseInfo course={course} authorsList={authorsList} />);

    const courseDuration = screen.getByText(getCourseDuration(120));

    expect(courseDuration).toBeInTheDocument();
  });

  test("renders course date correctly", () => {
    render(<CourseInfo course={course} authorsList={authorsList} />);

    const courseCreationDate = screen.getByText(
      formatCreationDate(course.creationDate)
    );
    expect(courseCreationDate).toBeInTheDocument();
  });

  test("renders course authors' names correctly", () => {
    render(<CourseInfo course={course} authorsList={authorsList} />);

    const authorNames = screen
      .getAllByRole("listitem")
      .map((li) => li.textContent);

    expect(authorNames).toEqual(["Author 1", "Author 3"]);
  });

  test("renders Back button correctly", () => {
    render(<CourseInfo course={course} authorsList={authorsList} />);

    const backButton = screen.getByRole("button", { name: "Back" });

    expect(backButton).toBeInTheDocument();
  });
});

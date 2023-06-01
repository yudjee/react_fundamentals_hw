import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Courses } from "../Courses";

describe('Courses component', () => {
  const mockedCoursesList = [
    {
      id: "1",
      title: "Course 1",
      description: "Course 1 description",
      creationDate: "2022-01-01",
      duration: 60,
      authors: [
        "27cc3006-e93a-4748-8ca8-73d06aa93b6d",
        "f762978b-61eb-4096-812b-ebde22838167",
      ],
    },
    {
      id: "2",
      title: "Course 2",
      description: "Course 2 description",
      creationDate: "2022-02-01",
      duration: 90,
      authors: ["df32994e-b23d-497c-9e4d-84e4dc02882f"],
    },
  ];
  const onAddClick = jest.fn();

  test("Should render list of courses", () => {
    render(<Courses courseList={mockedCoursesList} onAddClick={onAddClick} />);

    const courseElements = screen.getAllByTestId("courseCard");

    expect(courseElements[0]).toBeInTheDocument();
    expect(courseElements).toHaveLength(2);
  });

  test("Should render 'Add new course' button", () => {
    render(<Courses courseList={mockedCoursesList} onAddClick={onAddClick} />);

    const button = screen.getByText(/Add new course/);

    expect(button).toBeInTheDocument();
  });

  test("Should render EmptyCourseList component if no courses", () => {
    const mockedEmptyCoursesList: [] = [];
    render(<Courses courseList={mockedEmptyCoursesList} onAddClick={onAddClick} />);

    const emptyContainerElement = screen.getByTestId("emptyContainer");
    const addButtonElement = screen.getByTestId("addCourse");

    expect(emptyContainerElement).toBeInTheDocument();
    expect(addButtonElement).toBeInTheDocument();
  });
})

describe('EmptyCourseList', () => {
  const mockedEmptyCoursesList: [] = [];
  const onAddClick = jest.fn();

  test("Should render title", () => {
    render(<Courses courseList={mockedEmptyCoursesList} onAddClick={onAddClick} />);

    const title = screen.getByText(/Your List Is Empty/);

    expect(title).toBeInTheDocument();
  });

  test("Should render subtitle", () => {
    render(<Courses courseList={mockedEmptyCoursesList} onAddClick={onAddClick} />);

    const subTitle = screen.getByText(/Please use/);

    expect(subTitle).toBeInTheDocument();
  });

  test("Should render button", () => {
    render(<Courses courseList={mockedEmptyCoursesList} onAddClick={onAddClick} />);

    const button = screen.getByText('ADD NEW COURSE');

    expect(button).toBeInTheDocument();
  });
})



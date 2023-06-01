import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { CreateCourse } from "../CreateCourse";

describe("CreateCourse", () => {
  const mockAuthors = [
    { id: "1", name: "Author 1" },
    { id: "2", name: "Author 2" },
  ];

  const mockCreateCourse = jest.fn();
  const mockCreateAuthor = jest.fn();

  beforeEach(() => {
    mockCreateCourse.mockClear();
    mockCreateAuthor.mockClear();
  });

  it("should create a new course with the entered data", () => {
    render(
      <CreateCourse
        authorsList={mockAuthors}
        createCourse={mockCreateCourse}
        createAuthor={mockCreateAuthor}
      />
    );

    const titleInput = screen.getByTestId("titleInput");
    const durationInput = screen.getByTestId("durationInput");
    const descriptionTextArea = screen.getByTestId("descriptionTextArea");
    const createCourseButton = screen.getByTestId("createCourseButton");

    // Enter the course title
    fireEvent.change(titleInput, { target: { value: "Course Title" } });
    fireEvent.change(durationInput, { target: { value: "20" } });

    // Enter the course description
    fireEvent.change(descriptionTextArea, {
      target: { value: "Course Description" },
    });

    // Click the create course button
    fireEvent.click(createCourseButton);

    // Assert that createCourse is called with the correct data
    expect(mockCreateCourse).toHaveBeenCalledWith({
      id: expect.any(String),
      title: "Course Title",
      description: "Course Description",
      creationDate: "",
      duration: 20,
      authors: [],
    });
  });

  it("should not create a new course with the empty data", () => {
    render(
      <CreateCourse
        authorsList={mockAuthors}
        createCourse={mockCreateCourse}
        createAuthor={mockCreateAuthor}
      />
    );

    const createCourseButton = screen.getByTestId("createCourseButton");

    // Click the create course button
    fireEvent.click(createCourseButton);

    // Assert that createCourse is called with the correct data
    expect(mockCreateCourse).not.toHaveBeenCalled();
  });

  it("should add an author to the course when CreateAuthor component creates a new author", () => {
    render(
      <CreateCourse
        authorsList={mockAuthors}
        createCourse={mockCreateCourse}
        createAuthor={mockCreateAuthor}
      />
    );

    const createAuthorButton = screen.getByTestId("createAuthorButton");
    const nameInput = screen.getByTestId(
      "createAuthorInput"
    ) as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: "John" } });

    fireEvent.click(createAuthorButton);

    expect(mockCreateAuthor).toHaveBeenCalled();
  });

  it("should display the course authors in the course", () => {
    const mockCourseAuthors = ["1", "2"];
    render(
      <CreateCourse
        authorsList={mockAuthors}
        createCourse={mockCreateCourse}
        createAuthor={mockCreateAuthor}
      />
    );

    const courseAuthorItems = screen.getAllByTestId("authorItem");
    expect(courseAuthorItems.length).toBe(mockCourseAuthors.length);
  });
  it("should display the empty authors list message when there are no authors", () => {
    render(
      <CreateCourse
        authorsList={[]}
        createCourse={mockCreateCourse}
        createAuthor={mockCreateAuthor}
      />
    );
    const emptyText = screen.getByTestId("emptyText");

    // Assert that the empty text is displayed
    expect(emptyText).toBeInTheDocument();
    expect(emptyText.textContent).toBe("Authors list is empty");
  });
});

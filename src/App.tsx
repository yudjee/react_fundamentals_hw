import { useState } from "react";
import "./App.css";
import { Courses } from "./components/Courses/Courses";
import { Header } from "./components/Header/Header";
import { mockedAuthorsList, mockedCoursesList } from "./constants";
import { CreateCourse } from "./components/CreateCourse/CreateCourse";
import { AuthorItemType, CourseItemType } from "./types";
import { CourseInfo } from "./components/CourseInfo/CourseInfo";

function App() {
  const [courseList, setCourseList] =
    useState<CourseItemType[]>(mockedCoursesList);
  const [authorsList, setAuthorsList] =
    useState<AuthorItemType[]>(mockedAuthorsList);

  const [isAddMode, setIsAddMode] = useState(false);
  const onAddClick = () => setIsAddMode(true);
  const [selectedCourseId, setSelectedCourseId] = useState<null | string>(null);

  const createCourse = (course: CourseItemType) =>
    setCourseList((prevState) => [...prevState, course]);
  const createAuthor = (author: AuthorItemType) =>
    setAuthorsList((prevState) => [...prevState, author]);

  let view = (
    <Courses
      courseList={courseList}
      onAddClick={onAddClick}
      setSelectedCourseId={setSelectedCourseId}
    />
  );
  if (isAddMode) {
    view = (
      <CreateCourse
        authorsList={authorsList}
        createCourse={createCourse}
        createAuthor={createAuthor}
      />
    );
  } else if (selectedCourseId) {
    const selectedCourse = courseList.find(
      (course) => course.id === selectedCourseId
    );
    view = (
      <CourseInfo
        course={selectedCourse}
        setSelectedCourseId={setSelectedCourseId}
        authorsList={authorsList}
      />
    );
  }

  return (
    <div className="App">
      <Header />
      {view}
    </div>
  );
}

export default App;

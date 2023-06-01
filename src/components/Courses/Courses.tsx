import { FC } from "react";
import { Button } from "../../common/Button/Button";
import { CourseCard } from "./components/CourseCard/CourseCard";
import { CourseItemType } from "../../types";
import { SearchBar } from "./components/SearchBar/SearchBar";

import styles from "./Courses.module.css";

export interface ICourses {
  courseList: CourseItemType[];
  onAddClick: () => void;
  setSelectedCourseId: (id: string) => void;
}

export const Courses: FC<ICourses> = ({
  courseList,
  onAddClick,
  setSelectedCourseId,
}) => (
  <div className={styles.wrapper}>
    <SearchBar onAddClick={onAddClick} />
    {courseList.length > 0 ? (
      courseList.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          setSelectedCourseId={setSelectedCourseId}
        />
      ))
    ) : (
      <div className={styles.emptyWrapper} data-testid="emptyContainer">
        <h1>Your List Is Empty</h1>
        <p>Please use 'Add new course' button to add your firs course</p>
        <Button
          buttonText="ADD NEW COURSE"
          data-testid="addCourse"
          handleClick={onAddClick}
        />
      </div>
    )}
  </div>
);

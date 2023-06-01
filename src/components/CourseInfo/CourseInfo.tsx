import { Button } from "../../common/Button/Button";
import { formatCreationDate, getCourseDuration } from "../../helpers";
import { AuthorItemType, CourseItemType } from "../../types";
import styles from "./CourseInfo.module.css";

interface CourseInfoProps {
  course: CourseItemType | undefined;
  authorsList: AuthorItemType[];
  setSelectedCourseId?: (value: null) => void;
}

export const CourseInfo = ({
  course,
  authorsList,
  setSelectedCourseId,
}: CourseInfoProps) => {
  if (!course) {
    return <></>;
  }

  const courseAuthors = authorsList.filter((author) =>
    course.authors.includes(author.id)
  );

  return (
    <>
      <h1>{course.title}</h1>
      <div className={styles.courseInfo}>
        <p className={styles.description}>{course.description}</p>
        <div>
          <p>
            <b>ID: </b>
            {course.id}
          </p>
          <p>
            <b>Duration: </b>
            {getCourseDuration(course.duration)}
          </p>
          <p>
            <b>Created: </b>
            {formatCreationDate(course.creationDate)}
          </p>
          <div>
            <b>Authors</b>
            <ul className={styles.authorsList}>
              {courseAuthors.map((author) => (
                <li key={author.id}>{author.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Button
        buttonText="Back"
        handleClick={() => setSelectedCourseId?.(null)}
      />
    </>
  );
};

import { Button } from "../../../../common/Button/Button";
import { mockedAuthorsList } from "../../../../constants";
import { formatCreationDate, getCourseDuration } from "../../../../helpers";
import { CourseItemType } from "../../../../types";

import styles from "./CourseCard.module.css";

interface CourseCardProps {
  course: CourseItemType;
  setSelectedCourseId?: (id: string) => void;
}

export const CourseCard = ({
  course,
  setSelectedCourseId,
}: CourseCardProps) => {
  return (
    <div className={styles.wrapper} data-testid="courseCard">
      <div className={styles.description}>
        <h2 className={styles.title}>{course.title}</h2>
        <p>{course.description}</p>
      </div>
      <div className={styles.about}>
        <div>
          <b>Authors</b>:{" "}
          {course.authors
            .map(
              (authorId) =>
                mockedAuthorsList.find((author) => author.id === authorId)?.name
            )
            .join(", ")}
        </div>
        <div>
          <b>Duration</b>: {getCourseDuration(course.duration)}
        </div>
        <div>
          <b>Created</b>: {formatCreationDate(course.creationDate)}
        </div>
        <Button
          buttonText="Show course"
          handleClick={() => setSelectedCourseId?.(course.id)}
          className={styles.button}
        />
      </div>
    </div>
  );
};

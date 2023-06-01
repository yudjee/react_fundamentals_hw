import { FC, useState } from "react";
import { Input } from "../../common/Input/Input";
import { Button } from "../../common/Button/Button";
import { Textarea } from "../../common/Textarea/Textarea";
import { CreateAuthor } from "./components/CreateAuthor/CreateAuthor";
import { Duration } from "./components/Duration/Duration";
import { AuthorItem } from "./components/AuthorItem/AuthorItem";
import { AuthorItemType, CourseItemType } from "../../types";

import styles from "./CreateCourse.module.css";

interface ICreateCourse {
  authorsList: AuthorItemType[];
  createCourse: (course: CourseItemType) => void;
  createAuthor: (author: AuthorItemType) => void;
}

export const CreateCourse: FC<ICreateCourse> = ({
  authorsList,
  createCourse,
  createAuthor,
}) => {
  const [newCourse, setNewCourse] = useState<CourseItemType>({
    id: "",
    title: "",
    description: "",
    creationDate: "",
    duration: 0,
    authors: [],
  });

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewCourse({
      ...newCourse,
      title: e.target.value,
    });

  const onchangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setNewCourse({
      ...newCourse,
      description: e.target.value,
    });

  const onChangeDuration = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewCourse({
      ...newCourse,
      duration: +e.target.value,
    });

  const addAuthor = ({ id }: AuthorItemType) =>
    setNewCourse({
      ...newCourse,
      authors: [...newCourse.authors, id],
    });

  const onCreateCourse = () => {
    if (
      newCourse.duration > 0 &&
      newCourse.description.length > 2 &&
      newCourse.title.length > 2
    ) {
      createCourse(newCourse);
    }
  };

  return (
    <div>
      <div className={styles.titleWrapper}>
        <Input
          value={newCourse.title}
          onChange={onChangeTitle}
          labelText="title"
          placeholderText="Add title"
          data-testid="titleInput"
        />
        <Button
          buttonText="Create Course"
          handleClick={onCreateCourse}
          data-testid="createCourseButton"
        />
      </div>
      <Textarea
        label="Description"
        value={newCourse.description}
        onChange={onchangeDescription}
        data-testid="descriptionTextArea"
      />
      <div className={styles.authorsWrapper}>
        <div>
          <CreateAuthor onCreateAuthor={createAuthor} />
          <Duration duration={newCourse.duration} onChange={onChangeDuration} />
        </div>
        <div>
          <h3>Authors</h3>
          {authorsList.map((author) => (
            <AuthorItem
              key={author.id}
              author={author}
              onAddAuthor={addAuthor}
            />
          ))}
          <h3>Course authors</h3>
          {newCourse.authors.length > 0 ? (
            newCourse.authors.map((authorId) => {
              const author = authorsList.find((item) => item.id === authorId);

              return author ? (
                <p data-testid="selectedAuthor" key={author.id}>
                  {author.name}
                </p>
              ) : null;
            })
          ) : (
            <div data-testid="emptyText">Authors list is empty</div>
          )}
        </div>
      </div>
    </div>
  );
};

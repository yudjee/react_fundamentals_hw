import { FC } from "react";
import { Button } from "../../../../common/Button/Button";
import { AuthorItemType } from "../../../../types";

interface IAuthor {
  author: AuthorItemType;
  onAddAuthor: (author: AuthorItemType) => void;
}

export const AuthorItem: FC<IAuthor> = ({ author, onAddAuthor }) => {
  return (
    <div data-testid="authorItem">
      <p>{author.name}</p>
      <Button
        handleClick={() => onAddAuthor(author)}
        data-testid="addAuthor"
        buttonText="Add author"
      />
    </div>
  );
};

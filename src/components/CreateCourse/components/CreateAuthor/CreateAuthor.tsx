import React, { useState } from "react";
import { Input } from "../../../../common/Input/Input";
import { Button } from "../../../../common/Button/Button";
import { AuthorItemType } from "../../../../types";

export const CreateAuthor = ({
  onCreateAuthor,
}: {
  onCreateAuthor: (data: AuthorItemType) => void;
}) => {
  const [name, setName] = useState("");
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const onCreate = () => {
    if (name) {
      onCreateAuthor({ name, id: `${Math.random()}` });
      setName("");
    }
  };

  return (
    <div>
      <h2>Add author</h2>
      <Input
        value={name}
        onChange={onChangeName}
        labelText="Author name"
        placeholderText="Enter author name..."
        data-testid="createAuthorInput"
      />
      <Button
        buttonText="Create author"
        handleClick={onCreate}
        data-testid="createAuthorButton"
      />
    </div>
  );
};

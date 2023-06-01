import { useState } from "react";
import { Input } from "../../../../common/Input/Input";
import { Button } from "../../../../common/Button/Button";
import styles from "./SearchBar.module.css";

export const SearchBar = ({ onAddClick }: { onAddClick: () => void }) => {
  const [searchValue, setSearchValue] = useState("");
  const onChange = (e: { target: HTMLInputElement }): void =>
    setSearchValue(e.target.value);

  return (
    <div className={styles.wrapper}>
      <div>
        <Input
          data-testid="input"
          onChange={onChange}
          value={searchValue}
          className={styles.input}
          placeholderText="Enter name or id..."
          labelText=''
        />
        <Button buttonText='Search' handleClick={() => console.log('Button click')}/>
      </div>
      <Button buttonText='Add new courses' handleClick={onAddClick} />
    </div>
  );
};

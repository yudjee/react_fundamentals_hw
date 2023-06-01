import { Logo } from "./components/Logo/Logo";
import { Button } from "../../common/Button/Button";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div>
        <span className={styles.title}>Name</span>
        <Button buttonText='LOGIN' handleClick={() => console.log('Logout button clicked')}/>
      </div>
    </header>
  );
};

import styles from "./styles.module.scss";

export default function Nav() {

  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <a className={styles.nav_link}>
            About
          </a>
        </li>
        <li>
          <a className={styles.nav_link}>
            Pets
          </a>
        </li>
        <li>
          <a className={styles.nav_link}>
            News
          </a>
        </li>
      </ul>
    </nav>
  );
}

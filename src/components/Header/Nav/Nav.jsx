import styles from "./styles.module.scss";

export default function Nav() {

  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <a className={styles.nav_link} href="#About">
            About
          </a>
        </li>
        <li>
          <a className={styles.nav_link} href="#Pets">
            Pets
          </a>
        </li>
        <li>
          <a className={styles.nav_link} href="#News">
            News
          </a>
        </li>
        <li>
          <a className={styles.nav_link} href="#Features">
            Features
          </a>
        </li>
      </ul>
    </nav>
  );
}

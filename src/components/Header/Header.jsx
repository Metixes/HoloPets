import Nav from "./Nav/Nav";
import VirtualPet from "./VirtualPet/VirtualPet";

import logoImg from "../../assets/images/header/logo.png";
import styles from "./styles.module.scss";

export default function Header() {
  const removePreventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header_logo}>
          <img src={logoImg} alt="Holo Pets" />
        </div>
        <div className={styles.header_navigation}>
          <Nav />
          <a
            onClick={(event) => removePreventDefault(event)}
            className={styles.header_navigation_btn}
            href="">
            Contact us
          </a>
        </div>
      </div>
      <VirtualPet />
    </section>
  );
}

import dogImg from "../../../assets/images/main/subscribe/dogImg.webp";
import styles from "./styles.module.scss";

export default function Subscribe() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.subscribe}>
          <div className={styles.subscribe_img}>
            <img src={dogImg} alt="Image" />
          </div>
          <div className={styles.subscribe_info}>
            <h2 className={styles.subscribe_info_title}>Subscribe to our Newsletter</h2>
            <p className={styles.subscribe_info_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <form className={styles.subscribe_form} action="">
              <input className={styles.subscribe_form_input} type="text" />
              <button className={styles.subscribe_form_btn} type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

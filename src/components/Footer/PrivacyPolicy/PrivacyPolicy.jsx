import styles from "./styles.module.scss";

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.privacyPolicy}>
          <span className={styles.privacyPolicy_copy}>© 2023 Holopet. All rights reserved.</span>
            <div className={styles.privacyPolicy_links}>
                <a className={styles.privacyPolicy_links_link} href="">Privacy Policy</a>
                <a className={styles.privacyPolicy_links_link} href="">Terms of Service</a>
                <a className={styles.privacyPolicy_links_link} href="">About Us</a>
            </div>
        </div>
      </div>
    </div>
  );
}
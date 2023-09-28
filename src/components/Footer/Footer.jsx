import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";

import logo from "../../assets/images/header/logo.png";
import sprite from "../../assets/icons/sprite.svg";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.footer}>
            <div className={styles.footer_content}>
              <img src={logo} alt="Holo Pets" />
              <p className={styles.footer_content_text}>
                Experience the enchanting world of augmented reality with
                Holopet. Nurture, play, and explore with your virtual pets right
                in your own space. Download now and embark on a pet-loving
                adventure
              </p>
            </div>
            <div className={styles.footer_content}>
              <h3 className={styles.footer_content_title}>Contact Us</h3>
              <p className={styles.footer_content_text}>
                Have questions or need assistance? Reach out to our Holopet
                support team at
                <a
                  className={styles.footer_content_text_email}
                  href="mailto:support@holopet.com">
                  support@holopet.com
                </a>
                or give us a call at +1-800-HOLOPET.
              </p>
            </div>
            <div className={styles.footer_content}>
              <h3 className={styles.footer_content_title}>Follow us</h3>
              <p className={styles.footer_content_text}>
                Stay connected with Holopet on social media for the latest
                updates, contests, and adorable pet stories:
              </p>
              <div className={styles.footer_content_socialLinks}>
                <svg className={styles.footer_content_socialLinks_link}>
                  <use href={sprite + "#facebook"} />
                </svg>
                <svg className={styles.footer_content_socialLinks_link}>
                  <use href={sprite + "#instagram"} />
                </svg>
                <svg className={styles.footer_content_socialLinks_link}>
                  <use href={sprite + "#telegram"} />
                </svg>
                <svg className={styles.footer_content_socialLinks_link}>
                  <use href={sprite + "#xtwitter"} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PrivacyPolicy />
    </>
  );
}

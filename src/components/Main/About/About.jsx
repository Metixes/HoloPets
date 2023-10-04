import PictureMediaQuery from '../../../UI/PictureMediaQuery/PictureMediaQuery'

import catDefault from '../../../assets/images/main/about/cat1.png'
import cat1x from '../../../assets/images/main/about/cat1.webp'
import cat075x from '../../../assets/images/main/about/cat075.webp'
import cat05x from '../../../assets/images/main/about/cat05.webp'
import dogDefault from '../../../assets/images/main/about/dog1.png'
import dog1x from '../../../assets/images/main/about/dog1.webp'
import dog075x from '../../../assets/images/main/about/dog075.webp'
import dog05x from '../../../assets/images/main/about/dog05.webp'
import styles from "./styles.module.scss";

export default function About() {
  return (
    <section id='About' className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.about}>
          <PictureMediaQuery
            ImgDefault={catDefault}
            Img1x={cat1x}
            Img075x={cat075x}
            Img05x={cat05x}
            className={styles.about_content_img}
            width05={"768px"}
            width075={"1024px"}
            width1={"1024px"}
          />
          <div className={styles.about_content}>
            <div className={styles.about_content_info}>
              <a className={styles.about_content_btn} href="">
                ABOUT HOLOPET
              </a>
              <h2 className={styles.about_content_title}>
                What is HoloPet?
              </h2>
              <p className={styles.about_content_text}>
                Holopet is a revolutionary mobile app game that combines
                cutting-edge AR technology with the age-old joy of having a pet.
                It's designed to blur the line between the digital and physical
                worlds, offering you the unique opportunity to nurture and care
                for your very own virtual pet as if it were right there with
                you.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.about}>
          <PictureMediaQuery
            ImgDefault={dogDefault}
            Img1x={dog1x}
            Img075x={dog075x}
            Img05x={dog05x}
            className={styles.about_content_img}
            width05={"768px"}
            width075={"1024px"}
            width1={"1024px"}
          />
          <div className={styles.about_content}>
            <div className={styles.about_content_info}>
              <h2 className={styles.about_content_title}>
                What is HoloPet?
              </h2>
              <p className={styles.about_content_text}>
                Holopet is a revolutionary mobile app game that combines
                cutting-edge AR technology with the age-old joy of having a pet.
                It's designed to blur the line between the digital and physical
                worlds, offering you the unique opportunity to nurture and care
                for your very own virtual pet as if it were right there with
                you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

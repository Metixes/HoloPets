import PictureMediaQuery from "../../../UI/PictureMediaQuery/PictureMediaQuery";

import googleImg from "../../../assets/images/main/virtualPet/googleImg.png";
import storeImg from "../../../assets/images/main/virtualPet/storeImg.png";
import ImgDefault from "../../../assets/images/main/holoPets/holoPets1.png";
import Img1x from "../../../assets/images/main/holoPets/holoPets1.webp";
import Img075x from "../../../assets/images/main/holoPets/holoPets075.webp";
import Img05x from "../../../assets/images/main/holoPets/holoPets05.webp";
import styles from "./styles.module.scss";

export default function HoloPet() {
  const removePreventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.holoPet}>
          <PictureMediaQuery
            ImgDefault={ImgDefault}
            Img1x={Img1x}
            Img075x={Img075x}
            Img05x={Img05x}
            className={styles.holoPet_img}
            width05={"768px"}
            width075={"1024px"}
            width1={"1024px"}
          />
          <div className={styles.holoPet_info}>
            <h2 className={styles.holoPet_info_title}>
              Holopets available soon!
            </h2>
            <p className={styles.holoPet_info_text}>
              Experience the magic of bringing a virtual pet into the real world
              with Holopet. Whether you're a seasoned pet owner or looking for a
              unique and entertaining mobile game, Holopet is the perfect
              choice. Join our growing community of pet lovers and embark on an
              AR adventure like no other. Download Holopet now and watch the
              magic unfold in your very own home!
            </p>
            <p className={styles.holoPet_info_subText}>
              Get ready to fall in love with your Holopet {"-"} the pet that's
              always with you, even when you're apart.
            </p>
            <div className={styles.holoPet_info_links}>
              <a
                onClick={(event) => removePreventDefault(event)}
                className={styles.holoPet_info_link}
                href="">
                <img src={googleImg} alt="Google Play" />
              </a>
              <a
                onClick={(event) => removePreventDefault(event)}
                className={styles.holoPet_info_link}
                href="">
                <img src={storeImg} alt="App Store" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

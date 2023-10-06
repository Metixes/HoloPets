import PictureMediaQuery from "../../../UI/PictureMediaQuery/PictureMediaQuery";

import ImgDefault from "../../../assets/images/main/virtualPet/app1.png";
import Img1x from "../../../assets/images/main/virtualPet/app1.webp";
import Img075x from "../../../assets/images/main/virtualPet/app075.webp";
import Img05x from "../../../assets/images/main/virtualPet/app05.webp";
import bgDefault from "../../../assets/images/main/virtualPet/bg/bg1.png";
import bg1x from "../../../assets/images/main/virtualPet/bg/bg1.webp";
import bg075x from "../../../assets/images/main/virtualPet/bg/bg075.webp";
import bg05x from "../../../assets/images/main/virtualPet/bg/bg05.webp";
import googleImg from "../../../assets/images/main/virtualPet/googleImg.png";
import storeImg from "../../../assets/images/main/virtualPet/storeImg.png";
import sprite from "../../../assets/icons/sprite.svg";
import styles from "./styles.module.scss";

export default function VirtualPet() {
  const removePreventDefault = (event) => {
    event.preventDefault();
  };
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.virtual}>
          <div className={styles.virtual_info}>
            <a
              onClick={(event) => removePreventDefault(event)}
              className={styles.virtual_info_btn}
              href="">
              Coming in 2024
            </a>
            <h1 className={styles.virtual_info_title}>
              Your Virtual Pet, Now in Reality.
            </h1>
            <p className={styles.virtual_info_text}>
              Welcome to the world of Holopet, where magic and reality merge to
              bring you the ultimate augmented reality (AR) gaming experience!
              Say goodbye to the days of virtual pets confined to screens and
              say hello to your new furry, feathered, or scaly friend right in
              your living room.
            </p>
            <div className={styles.virtual_info_links}>
              <img src={googleImg} alt="Google play" />
              <img src={storeImg} alt="App Store" />
            </div>
          </div>
          <div className={styles.virtual_app}>
            <PictureMediaQuery
              ImgDefault={ImgDefault}
              Img1x={Img1x}
              Img075x={Img075x}
              Img05x={Img05x}
              className={styles.virtual_app_img}
              width05={"768px"}
              width075={"1024px"}
              width1={"1024px"}
            />
            <a
              onClick={(event) => removePreventDefault(event)}
              className={styles.virtual_app_btn}
              href="">
              <svg>
                <use href={sprite + "#arrow-to-right"} />
              </svg>
            </a>
          </div>
          <PictureMediaQuery
            ImgDefault={bgDefault}
            Img1x={bg1x}
            Img075x={bg075x}
            Img05x={bg05x}
            className={styles.virtual_bg}
            width05={"768px"}
            width075={"1024px"}
            width1={"1024px"}
          />
        </div>
      </div>
    </section>
  );
}

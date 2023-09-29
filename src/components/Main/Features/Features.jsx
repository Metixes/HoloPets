import { useRef, useState } from "react";
import { Carousel } from "antd";
import TimeLine from "./TimeLine";
import phone from "../../../assets/images/main/features/phone.png";
import dogImg from "../../../assets/images/main/features/dogImg.png";
import sprite from "../../../assets/icons/sprite.svg";
import styles from "./styles.module.scss";

const slides = [
  // {
  //   img: photo1,
  //   title: "Golden Retriever",
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis nisl facilisis, porta ligula ac, elementum tortor",
  // },
];

export default function Features() {
  const carouselRef = useRef();
  const [active, setActive] = useState(0);
  const onChange = (currentSlide) => {
    setActive(currentSlide);
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.features}>
          <h2 className={styles.features_title}>
            Features That Bring Holopet to Life:
          </h2>
          <div className={styles.features_description}>
            <div className={styles.features_steps}>
              <div className={styles.features_steps_content}>
                <h4 className={styles.features_steps_title}>
                  Customizable Pets:
                </h4>
                <p className={styles.features_steps_text}>
                  Choose from a variety of creatures, each with its own unique
                  personality and characteristics. Customize their appearance,
                  name them, and watch them grow and develop right before your
                  eyes.
                </p>
                <svg>
                  <use href={sprite + '#radio-active'}/>
                </svg>
              </div>
              <div className={styles.features_steps_content}>
                <h4 className={styles.features_steps_title}>
                  Customizable Pets:
                </h4>
                <p className={styles.features_steps_text}>
                  Choose from a variety of creatures, each with its own unique
                  personality and characteristics. Customize their appearance,
                  name them, and watch them grow and develop right before your
                  eyes.
                </p>
                <svg>
                  <use href={sprite + '#radio'}/>
                </svg>
              </div>
              <div className={styles.features_steps_content}>
                <h4 className={styles.features_steps_title}>
                  Customizable Pets:
                </h4>
                <p className={styles.features_steps_text}>
                  Choose from a variety of creatures, each with its own unique
                  personality and characteristics. Customize their appearance,
                  name them, and watch them grow and develop right before your
                  eyes.
                </p>
                <svg>
                  <use href={sprite + '#radio'}/>
                </svg>
              </div>
              <div className={styles.features_steps_content}>
                <h4 className={styles.features_steps_title}>
                  Customizable Pets:
                </h4>
                <p className={styles.features_steps_text}>
                  Choose from a variety of creatures, each with its own unique
                  personality and characteristics. Customize their appearance,
                  name them, and watch them grow and develop right before your
                  eyes.
                </p>
                <svg>
                  <use href={sprite + '#radio'}/>
                </svg>
              </div>
              <div className={styles.features_steps_content}>
                <h4 className={styles.features_steps_title}>
                  Customizable Pets:
                </h4>
                <p className={styles.features_steps_text}>
                  Choose from a variety of creatures, each with its own unique
                  personality and characteristics. Customize their appearance,
                  name them, and watch them grow and develop right before your
                  eyes.
                </p>
                <svg>
                  <use href={sprite + '#radio'}/>
                </svg>
              </div>
            </div>
            <div className={styles.features_phone}>
              <img
                className={styles.features_phone_bg}
                src={phone}
                alt="Phone Image"
              />
              <Carousel
                className={styles.slider}
                ref={carouselRef}
                afterChange={onChange}
                dots={true}
                touchMove={true}
                dotPosition={"right"}
                >
                <div className={styles.slider_slide}>
                  <img src={dogImg} alt="Dog Image" />
                </div>
                <div className={styles.slider_slide}>
                  <img src={dogImg} alt="Dog Image" />
                </div>
                <div className={styles.slider_slide}>
                  <img src={dogImg} alt="Dog Image" />
                </div>
                <div className={styles.slider_slide}>
                  <img src={dogImg} alt="Dog Image" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

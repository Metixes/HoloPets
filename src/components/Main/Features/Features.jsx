import { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";
import { useStore } from '../../../store/store'
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
  const setSlide = useStore(state => state.setSlide)
  const currentSlide = useStore(state => state.currentSlide)

  const onChange = (currentSlide) => {
    setSlide(currentSlide)
  };

  useEffect(() => {
    carouselRef.current.goTo(currentSlide)
  }, [currentSlide])

  return (
    <section id="Features" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.features}>
          <h2 className={styles.features_title}>
            Features That Bring Holopet to Life:
          </h2>
          <div className={styles.features_description}>
            <div className={styles.features_steps}>
              <TimeLine />
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

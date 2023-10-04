import { useRef, useState } from "react";
import PictureMediaQuery from "../../../UI/PictureMediaQuery/PictureMediaQuery";
import { Carousel } from "antd";
import photo1 from "../../../assets/images/main/ourPets/photo1.webp";
import photo2 from "../../../assets/images/main/ourPets/photo2.webp";
import photo3 from "../../../assets/images/main/ourPets/photo3.webp";
import userIcon from "../../../assets/images/main/latestNews/userIcon.png";
import sprite from "../../../assets/icons/sprite.svg";
import styles from "./styles.module.scss";

const slides = [
  {
    img: photo1,
    title: "Golden Retriever",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis nisl facilisis, porta ligula ac, elementum tortor",
  },
  {
    img: photo2,
    title: "Fluffy Cat",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis nisl facilisis, porta ligula ac, elementum tortor",
  },
  {
    img: photo3,
    title: "German Shepherd",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis nisl facilisis, porta ligula ac, elementum tortor",
  },
];

export default function OurPets() {
  const carouselRef = useRef();
  const [active, setActive] = useState(0);
  const onChange = (currentSlide) => {
    setActive(currentSlide);
  };

  return (
    <section id="Pets" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.latest}>
          <div className={styles.latest_info}>
            <h2 className={styles.latest_info_title}>Our Pets</h2>
            <p className={styles.latest_info_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
              nisl facilisis, porta ligula ac, elementum tortor. Class aptent
              taciti sociosqu ad litora torquent per conubia.
            </p>
            <div className={styles.latest_info_carouselBtns}>
              <svg
                className={styles.latest_info_prevButton}
                onClick={() => carouselRef.current.prev()}>
                <use href={sprite + "#prev-arrow"}></use>
              </svg>
              <svg
                className={styles.latest_info_nextButton}
                onClick={() => carouselRef.current.next()}>
                <use href={sprite + "#next-arrow"}></use>
              </svg>
            </div>
          </div>
            <Carousel
              className={styles.carousel}
              ref={carouselRef}
              afterChange={onChange}
              touchMove={true}
              speed={500}
              dots={true}
              variableWidth={true}
            >
              {slides.map(item => (
                <div key={item.title} className={styles.slide_Wrapper}>
                  <div className={styles.slide_content}>
                    <img
                      className={styles.slide_content_img}
                      src={item.img}
                      alt="Photo"
                    />
                    <div className={styles.slide_content_info}>
                      <h4 className={styles.slide_content_title}>
                        {item.title}
                      </h4>
                      <p className={styles.slide_content_text}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
        </div>
      </div>
    </section>
  );
}

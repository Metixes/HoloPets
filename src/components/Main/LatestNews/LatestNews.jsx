import { useRef, useState } from "react";
import PictureMediaQuery from "../../../UI/PictureMediaQuery/PictureMediaQuery";
import { Carousel } from "antd";
import photo1 from "../../../assets/images/main/latestNews/photo1.webp";
import photo2 from "../../../assets/images/main/latestNews/photo2.webp";
import photo3 from "../../../assets/images/main/latestNews/photo3.webp";
import userIcon from "../../../assets/images/main/latestNews/userIcon.png";
import sprite from '../../../assets/icons/sprite.svg'
import styles from "./styles.module.scss";

const slides = [
  {
    img1: (<img src={photo1} alt="Image" />),
    img2: (<img src={photo2} alt="Image" />),
    img3: (<img src={photo3} alt="Image" />),
    btnText: "March 13, 2023",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis nisl facilisis, porta ligula ac, elementum tortor",
    userIcon: (<img src={userIcon} alt="User Icon" />),
    userFullName: "Angelica Gomez",
  },
  {
    img1: (<img src={photo1} alt="Image" />),
    img2: (<img src={photo2} alt="Image" />),
    img3: (<img src={photo3} alt="Image" />),
    btnText: "March 13, 2023",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis nisl facilisis, porta ligula ac, elementum tortor",
    userIcon: (<img src={userIcon} alt="User Icon" />),
    userFullName: "Angelica Gomez",
  },
  {
    img1: (<img src={photo1} alt="Image" />),
    img2: (<img src={photo2} alt="Image" />),
    img3: (<img src={photo3} alt="Image" />),
    btnText: "March 13, 2023",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis nisl facilisis, porta ligula ac, elementum tortor",
    userIcon: (<img src={userIcon} alt="User Icon" />),
    userFullName: "Angelica Gomez",
  },
  {
    img1: (<img src={photo1} alt="Image" />),
    img2: (<img src={photo2} alt="Image" />),
    img3: (<img src={photo3} alt="Image" />),
    btnText: "March 13, 2023",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis nisl facilisis, porta ligula ac, elementum tortor",
    userIcon: (<img src={userIcon} alt="User Icon" />),
    userFullName: "Angelica Gomez",
  },
];

export default function LatestNews() {
  const carouselRef = useRef();
  const [active, setActive] = useState(0);
  const onChange = (currentSlide) => {
    setActive(currentSlide);
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.latest}>
          <div className={styles.latest_info}>
            <h2 className={styles.latest_info_title}>Latest News</h2>
            <p className={styles.latest_info_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={styles.carousel}>
            <Carousel
              ref={carouselRef}
              afterChange={onChange}
              touchMove={true}
              speed={500}
              dots={true}
              >
                <div className={styles.carousel_slide}>
                  <div className={styles.carousel_content}>
                    <img className={styles.carousel_content_img} src={photo1} alt="Photo" />
                    <div className={styles.carousel_content_info}>
                      <span className={styles.carousel_content_postDate}>
                        March 13, 2023
                      </span>
                      <h4 className={styles.carousel_content_title}>Lorem ipsum dolor sit amet</h4>
                      <p className={styles.carousel_content_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis nisl facilisis, porta ligula ac, elementum tortor</p>
                      <div className={styles.carousel_content_userInfo}>
                        <img src={userIcon} alt="" />
                        <span>By: Angelina Gonzer</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.carousel_content}>
                    <img className={styles.carousel_content_img} src={photo1} alt="Photo" />
                    <div className={styles.carousel_content_info}>
                      <span className={styles.carousel_content_postDate}>
                        March 13, 2023
                      </span>
                      <h4 className={styles.carousel_content_title}>Lorem ipsum dolor sit amet</h4>
                      <p className={styles.carousel_content_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis nisl facilisis, porta ligula ac, elementum tortor</p>
                      <div className={styles.carousel_content_userInfo}>
                        <img src={userIcon} alt="" />
                        <span>By: Angelina Gonzer</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.carousel_content}>
                    <img className={styles.carousel_content_img} src={photo1} alt="Photo" />
                    <div className={styles.carousel_content_info}>
                      <span className={styles.carousel_content_postDate}>
                        March 13, 2023
                      </span>
                      <h4 className={styles.carousel_content_title}>Lorem ipsum dolor sit amet</h4>
                      <p className={styles.carousel_content_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis nisl facilisis, porta ligula ac, elementum tortor</p>
                      <div className={styles.carousel_content_userInfo}>
                        <img src={userIcon} alt="" />
                        <span>By: Angelina Gonzer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.carousel_slide}>
                  <div className={styles.carousel_content}>
                    <img className={styles.carousel_content_img} src={photo1} alt="Photo" />
                    <div className={styles.carousel_content_info}>
                      <span className={styles.carousel_content_postDate}>
                        March 13, 2023
                      </span>
                      <h4 className={styles.carousel_content_title}>Lorem ipsum dolor sit amet</h4>
                      <p className={styles.carousel_content_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis nisl facilisis, porta ligula ac, elementum tortor</p>
                      <div className={styles.carousel_content_userInfo}>
                        <img src={userIcon} alt="" />
                        <span>By: Angelina Gonzer</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.carousel_content}>
                    <img className={styles.carousel_content_img} src={photo1} alt="Photo" />
                    <div className={styles.carousel_content_info}>
                      <span className={styles.carousel_content_postDate}>
                        March 13, 2023
                      </span>
                      <h4 className={styles.carousel_content_title}>Lorem ipsum dolor sit amet</h4>
                      <p className={styles.carousel_content_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis nisl facilisis, porta ligula ac, elementum tortor</p>
                      <div className={styles.carousel_content_userInfo}>
                        <img src={userIcon} alt="" />
                        <span>By: Angelina Gonzer</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.carousel_content}>
                    <img className={styles.carousel_content_img} src={photo1} alt="Photo" />
                    <div className={styles.carousel_content_info}>
                      <span className={styles.carousel_content_postDate}>
                        March 13, 2023
                      </span>
                      <h4 className={styles.carousel_content_title}>Lorem ipsum dolor sit amet</h4>
                      <p className={styles.carousel_content_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis nisl facilisis, porta ligula ac, elementum tortor</p>
                      <div className={styles.carousel_content_userInfo}>
                        <img src={userIcon} alt="" />
                        <span>By: Angelina Gonzer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            <svg
              className={styles.carousel_prevButton}
              onClick={() => carouselRef.current.prev()}>
              <use href={sprite + "#prev-arrow"}></use>
            </svg>
            <svg
              className={styles.carousel_nextButton}
              onClick={() => carouselRef.current.next()}>
              <use href={sprite + "#next-arrow"}></use>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

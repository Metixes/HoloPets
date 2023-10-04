import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import sprite from "../../../assets/icons/sprite.svg"
import styles from "./styles.module.scss";
import { useStore } from "../../../store/store";

const initialSteps = [
  {
    title: "Customizable Pets:",
    description:
      "Choose from a variety of creatures, each with its own unique personality and characteristics. Customize their appearance, name them, and watch them grow and develop right before your eyes.",
  },
  {
    title: "Realistic Interactions:",
    description: `Thanks to AR technology, Holopet's interactions feel incredibly lifelike. Pet, feed, play, and even take them on virtual adventures in your own environment.`,
  },
  {
    title: "Augmented Reality Environment:",
    description: `Your home becomes your pet's playground. They'll explore your space, reacting to real-life objects and surfaces. Watch them interact with your furniture, chase virtual toys, and even hide behind your plants.`,
  },
  {
    title: "Social Connections:",
    description: `Share your Holopet adventures with friends and family. Compete in AR pet competitions, visit each other's virtual pet worlds, and embark on virtual playdates with friends' pets.`,
  },
];

export default function TimeLine() {
  const [steps, setSteps] = useState(initialSteps)
  const setSlide = useStore(state => state.setSlide)
  const currentSlide = useStore(state => state.currentSlide)

  useEffect(() => {
    const newSteps = [...steps].map((el, index) => {
      if(index === currentSlide){
        return {...el, icon: <svg><use href={sprite + '#radioActive'} /></svg>}
      }else{
        return {...el, icon: <svg><use href={sprite + '#radio'} /></svg>}
      }
    })
    setSteps(newSteps)
  }, [currentSlide])

  return (
    <Steps
      className={styles.steps}
      current={currentSlide}
      onChange={(n) => setSlide(n)}
      direction="vertical"
      items={steps}
    />
  );
}

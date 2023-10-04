import { create } from "zustand";

export const useStore = create((set) => ({
    currentSlide: 0,

    setSlide: (number) => {
        set(state => ({ currentSlide: state.currentSlide = number }))
    },
}))
"use client"

import "./styles.css"
import { useEffect, useState } from "react";

const KINDLE_IMAGES = [
    "/kindle/celeste.jpg",
    "/kindle/Deltarune.png",
    "/kindle/HK.png",
    "/kindle/Junioryear.png",
    "/kindle/Nut_Pug.png",
    "/kindle/oneshot.png",
    "/kindle/Rebels.jpg",
    "/kindle/Aguefort.png",
    "/kindle/AnkarnaCassandra.png",
] as const;

export default function Kindle() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        KINDLE_IMAGES.forEach((src) => {
            const image = new Image();
            image.src = src;
        });

        const intervalId = window.setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % KINDLE_IMAGES.length);
        }, 5000);

        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <div className="m-auto ml-20 max-h-full rotate-25 top-0 left-0">
            <img
                src={KINDLE_IMAGES[currentIndex]}
                alt="Kindle screensaver slide"
                height={416}
                loading="eager"
                decoding="async"
                className="absolute top-[23px] left-[16px] max-h-38"
            />
            <img src="/kindle.png" alt="Kindle Screensaver Outline" className="max-h-52" />
        </div>
    );
}
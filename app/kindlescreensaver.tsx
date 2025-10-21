"use client"

import "./styles.css"
import { useState } from "react";
import { useEffect } from "react";

export default function Kindle() {
    const imgs =[
        "/kindle/celeste.jpg",
        "/kindle/Deltarune.png",
        "/kindle/HK.png",
        "/kindle/JuniorYear.png",
        "/kindle/Nut_Pug.png",
        "/kindle/oneshot.png",
        "/kindle/Rebels.jpg",
        "/kindle/Aguefort.png",
        "/kindle/AnkarnaCassandra.png"
    ]
    
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => {
            if(prevIndex === imgs.length - 1) {
                return 0;
            } 
            else {
                return prevIndex + 1;
            }
        });
    }, 5000)
    
        return () => clearInterval(intervalId);
    }, [imgs.length])

    return (
        <div className="m-auto ml-20 max-h-full rotate-25 top-0 left-0">
            <img src={imgs[currentIndex]} height={"416"} className="absolute top-[23px] left-4 max-h-38"/>
            <img src="/kindle.png" alt="Kindle Screensaver Outline" className="max-h-52" />
        </div>
    )
}
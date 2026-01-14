"use client"

import { useState } from "react";
import { useEffect } from "react";


export default function ImgRotator(imglist: string[]) {
    const imgs = imglist;
    
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
    }, 3000)
    
        return () => clearInterval(intervalId);
    }, [imgs.length])

    return (
        imgs[currentIndex]
    )
}
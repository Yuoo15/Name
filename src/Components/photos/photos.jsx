import React, { useRef, useEffect, useState } from "react";
import styles from "./photos.module.css";
import image_1 from '../../assets/mincraft_home.jpg';
import image_2 from '../../assets/mincraft_new_year.jpg';
import image_3 from '../../assets/new_year.jpg';
import image_4 from '../../assets/park_pogran.jpg';
import Photo from "../../modules/photo/photo";

export default () => {
    const moments = [
        { image: image_1, text: "Помнишь наш домик?" },
        { image: image_2, text: "Помнишь наш первый домик?" },
        { image: image_3, text: "Помнишь как мы встречали Новый Год?" },
        { image: image_4, text: "Помнишь как мы с тобой гуляли в парке?" }
    ];

    const photosRef = useRef(null);
    const intervalRef = useRef(null);
    const [direction, setDirection] = useState(1); // 1 - вправо, -1 - влево

    useEffect(() => {
        startAutoScroll();
        return stopAutoScroll;
    }, [direction]);

    const startAutoScroll = () => {
        stopAutoScroll();
        intervalRef.current = setInterval(() => {
            if (photosRef.current) {
                photosRef.current.scrollLeft += direction;
                // Если дошли до конца, меняем направление на влево
                if (
                    direction === 1 &&
                    photosRef.current.scrollLeft + photosRef.current.offsetWidth >=
                    photosRef.current.scrollWidth
                ) {
                    setDirection(-1);
                }
                // Если дошли до начала, меняем направление на вправо
                if (
                    direction === -1 &&
                    photosRef.current.scrollLeft <= 0
                ) {
                    setDirection(1);
                }
            }
        }, 10); // скорость скролла
    };

    const stopAutoScroll = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    return (
        <>
            <h1 className={styles.h1}>Подборка "Помнеш"</h1>
            <div
                className={styles.photos}
                ref={photosRef}
                onMouseEnter={stopAutoScroll}
                onMouseLeave={startAutoScroll}
                onTouchStart={stopAutoScroll}
                onTouchEnd={startAutoScroll}
            >
                {moments.map((moment, index) => (
                    <Photo key={index} image={moment.image} text={moment.text} />
                ))}
            </div>
        </>
    );
}
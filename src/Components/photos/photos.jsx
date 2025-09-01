import React, { useRef, useEffect, useState } from "react";
import styles from "./photos.module.css";
import image_1 from '../../assets/image_1.png';
import image_2 from '../../assets/mincraft_new_year.jpg';
import image_3 from '../../assets/new_year.jpg';
import image_4 from '../../assets/park_pogran.jpg';
import Photo from "../../modules/photo/photo";

export default () => {
    const moments = [
        { alt: "Фото 1", image: image_1, text: "Описание 1" },
        { alt: "Фото 2", image: image_1, text: "Описание 2" },
        { alt: "Фото 3", image: image_1, text: "Описание 3" },
        { alt: "Фото 4", image: image_1, text: "Описание 4" }
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
            <h1 className={styles.h1}>Подборка "Имя подборки"</h1>
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
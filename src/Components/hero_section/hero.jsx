import React from "react";
import styles from "./hero.module.css";
export default () => {
    return(
        <>
        <div className={styles.container}>
            <h1 className={styles.h1}>С днем рождения Имя!</h1>
            <p className={styles.p}>Листай вниз)</p>
            <div className={styles.arrow_down}></div>
        </div>

        </>
    )
}
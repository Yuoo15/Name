import React from "react";
import styles from './photo.module.css';
export default(props)=>{
    return(
        <>
        <div className={styles.photo}>
            <img className={styles.image} src={props.image} alt={props.text} width={300} height={300} />
            <p className={styles.p}>{props.text}</p>
        </div>
        </>
    )
}
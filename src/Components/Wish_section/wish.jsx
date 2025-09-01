import styles from './wish.module.css'
import React, { useState } from 'react'
export default()=>{
    const [vision_1, setVision_1] = useState(false)
    const [vision_2, setVision_2] = useState(false)
    const [vision_3, setVision_3] = useState(false)
    return(
        <>
        <div className={styles.wishContainer}>
            <h1 className={styles.h1}>Моя(й) Имя...</h1>
            <p className={styles.p_h}>Нажми что бы узнать</p>
            <div onClick={()=>setVision_1((prev)=>true)} className={styles.heart}>❤️</div>
            {vision_1 && <p className={styles.p}>сегодня твой день, я хочу, чтобы он стал особенным, даже если мы не рядом...</p>}
            <div onClick={()=>setVision_2((prev)=>true)} className={styles.heart}>❤️</div>
            {vision_2 && <p className={styles.p}>С днем рождения любовь моя. Ты - чудо, ия хочу сказать тебе кое-что важное...</p>}
            <div onClick={()=>setVision_3((prev)=>true)} className={styles.heart}>❤️</div>
            {vision_3 && <p className={styles.p}>Ты знаешь, что ты для меня целый мир. И сегодня этот мир празднует твой день</p>}


        </div>
        </>
    )
}
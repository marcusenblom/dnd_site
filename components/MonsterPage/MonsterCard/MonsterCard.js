import Link from "next/link";
import styles from "./MonsterCard.module.scss";

export default function MonsterCard({ monster, index }){

    return(
        <li className={styles.monster}>

            <div className={styles.card}>
                <div className={styles.bgLayerOne}>
                    <img src="/img/card/background/card_bg_metal.png" alt="" />
                </div>
                <div className={styles.bgLayerTwo}>
                    <img src="/img/card/background/card_bg_monster.jpg" alt="" />
                </div>

                <div className={styles.typeContainer}>
                    <div className={styles.bg}></div>
                    <div className={styles.icon}>
                        <img src={`/img/placeholders/${monster?.type || "beast"}.jpg`} alt="" />
                    </div>
                </div>

                <div className={styles.nameContainer}>
                    <span className={styles.name}>{monster?.name}</span>
                </div>
            </div>
            
        </li>
    )
}
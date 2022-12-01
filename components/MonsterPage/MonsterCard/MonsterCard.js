import { formatChallengeRating } from "lib/helpFunctions";
import Link from "next/link";
import { useState } from "react";
import cn from 'classnames';
import styles from "./MonsterCard.module.scss";

export default function MonsterCard({ monster, index }){
    const [showMore, setShowMore] = useState(false);


    return(
        <li className={cn(styles.monster, showMore && styles.showMore)}>

            <div className={styles.firstCol} onClick={()=>{setShowMore(!showMore)}}>
                <div className={styles.crContainer}>
                    <span className={styles.cr}>{formatChallengeRating(monster?.challenge_rating)}</span>
                </div>

                <div className={styles.nameContainer}>
                    <span className={styles.name}>{monster?.name}</span>
                </div>
            </div>

            <div className={styles.secondCol} onClick={()=>{setShowMore(!showMore)}}>
                <div className={styles.sizeContainer}>
                    <span className={styles.size}>{monster?.size}</span>
                </div>

                <div className={styles.typeContainer}>
                    <span className={styles.type}>{monster?.type}</span>
                    <div className={styles.icon}>
                        <img src={`/img/placeholders/${monster?.type || "beast"}.jpg`} alt="" />
                    </div>
                </div>
            </div>

            <div className={styles.dropDownContent}>
                {monster?.desc && <div className={styles.descriptionContainer}>
                    <p className={styles.description}>{monster?.desc}</p>
                </div>}
            </div>

        </li>
    )
}
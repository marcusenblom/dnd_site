import styles from './EncounterCard.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { formatDate } from 'lib/helpFunctions';

export default function EncounterCard({ encounter, index }){

    console.log(index % 6);

    return(
        <li className={styles.card}>

            <div className={styles.bg}><img className={styles.img} src={`/img/battles/battle_${(index % 6) + 1}.jpg`} alt="" /></div>

            <div className={styles.dateContainer}>
                <span className={styles.date}>{formatDate(new Date(encounter?.createdAt))}</span>
            </div>

            <div className={styles.content}>
                <div className={styles.nameContainer}>
                    <p className={styles.name}>{encounter?.name}</p>
                </div>
            </div>

        </li>
    )
}
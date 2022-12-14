import styles from './EncounterCard.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';

export default function EncounterCard({ encounter }){


    return(
        <li className={styles.card}>
            <div className={styles.nameContainer}>
                <p className={styles.name}>{encounter?.name}</p>
            </div>

            <div className={styles.dateContainer}>
                <span className={styles.name}>{encounter?.createdAt}</span>
            </div>
           
        </li>
    )
}
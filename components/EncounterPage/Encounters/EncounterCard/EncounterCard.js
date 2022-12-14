import styles from './EncounterCard.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';

export default function EncounterCard({ encounter }){


    return(
        <li className={styles.card}>
            <p>{encounter?.id}</p>
           
        </li>
    )
}
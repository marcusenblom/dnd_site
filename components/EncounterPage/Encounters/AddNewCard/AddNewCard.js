import styles from './AddNewCard.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { formatDate } from 'lib/helpFunctions';

export default function AddNewCard({ createNewEncounter, amountOfEncounters }){


    return(
        <li className={styles.addNew} onClick={createNewEncounter}>

            <div className={styles.bg}><img className={styles.img} src={`/img/battles/party.jpg`} alt="" /></div>

            <div className={styles.icon}><img src="/img/icons/crossed_swords.png" alt="" /></div>
            
            <div className={styles.textContainer}>
                <p className={styles.text}>Create new encounter</p>
            </div>

        </li>
    )
}
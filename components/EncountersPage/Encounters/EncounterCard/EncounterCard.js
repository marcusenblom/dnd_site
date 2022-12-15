import styles from './EncounterCard.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { formatDate } from 'lib/helpFunctions';

export default function EncounterCard({ encounter, index, deleteEncounter }){
    const [show, setShow] = useState(true);
    function deleteThis(){
        setShow(false);
       
        setTimeout(() => {
            deleteEncounter(encounter?.id);
        }, 300);
    }

    return(
        <li className={cn(styles.card, show && styles.show)}>

            <div className={styles.bg}><img className={styles.img} src={`/img/battles/battle_${encounter?.bgImage || 1}.jpg`} alt="" /></div>

            <div className={styles.deleteContainer}>
                <div className={styles.delete} onClick={deleteThis}>
                    <div className={cn(styles.line, styles.lineOne)}></div>
                    <div className={cn(styles.line, styles.lineTwo)}></div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.dateContainer}>
                    <span className={styles.date}>{formatDate(new Date(encounter?.createdAt))}</span>
                </div>

                <div className={styles.content}>
                    <div className={styles.nameContainer}>
                        <p className={styles.name}>{encounter?.name}</p>
                    </div>
                </div>
            </div>

        </li>
    )
}
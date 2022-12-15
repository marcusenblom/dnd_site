import styles from './CreateNewEncounterWindow.module.scss';
import cn from 'classnames';

export default function CreateNewEncounterWindow({ show }){

    return(
        <div className={cn(styles.createNew, show && styles.show)}>
            <div className={styles.createNewWindow}>
                <div className={styles.topHeader}>Create new encounter</div>
            </div>
        </div>
    )
}
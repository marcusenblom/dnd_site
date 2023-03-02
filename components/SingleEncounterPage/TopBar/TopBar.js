import styles from './TopBar.module.scss';
import cn from 'classnames';

export default function TopBar({ name, setCreatingNewCharacter, creatingNewCharacter }){

    return(
        <div className={styles.topBar}>

            <div className={styles.leftNav}>
                <div className={styles.buttonWrapper}>
                    <button type='button' className={cn(styles.navButton, creatingNewCharacter && styles.active)} onClick={()=>{setCreatingNewCharacter(true)}}>Create Character</button>
                </div>
            </div>

            <div className={styles.headerContainer}>
                <h4 className={styles.header}>{name}</h4>
            </div>

            <div className={styles.rightNav}></div>
        </div>
    )
}
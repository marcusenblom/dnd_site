import styles from './MonsterCharacter.module.scss';
import cn from 'classnames';

export default function MonsterCharacter({ name, monster_type, max_hp, ac, curr_hp}){

    return(
        <div className={styles.monster}>
            
            <div className={styles.inner}>

                <div className={styles.imageContainer}>
                    <div className={styles.imageContainerInner}>
                        <img className={styles.typeImage} src={`/img/placeholders/${monster_type}.jpg`} alt="" />

                        <div className={styles.ac}>
                            <span>{ac}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.middle}>

                    <div className={styles.healthBarContainer}>

                        <div className={styles.nameContainer}>
                            <p className={styles.name}>{name}</p>
                        </div>

                        <div className={styles.healthBarInner}>
                            <div className={styles.currentHealth} style={{"width": `${curr_hp / max_hp * 100}%`}}></div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
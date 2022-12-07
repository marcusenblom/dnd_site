import styles from './MonsterType.module.scss';
import cn from 'classnames';

export default function MonsterType({ imgUrl, name, toggle, active }){

    return(
        <div className={cn(styles.type, active && styles.active)}>
            <div className={styles.icon}>
                <img src={imgUrl} alt="" />
            </div>
            <p className={styles.name}>
                {name}
            </p>
        </div>
    )
}
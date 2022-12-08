import styles from './Sorting.module.scss';
import cn from 'classnames';

export default function MonsterSorting({}){

    return(
        <div className={styles.sorting}>
            <div className={cn(styles.col, styles.first)}>
                <div className={styles.cr}>
                    <p>CR</p>
                </div>
                <div className={styles.name}>
                    <p>Name</p>
                </div>
            </div>

            <div className={cn(styles.col, styles.second)}>
                <div className={styles.size}>
                    <p>Size</p>
                </div>
                <div className={styles.type}>
                    <p>Type</p>
                </div>
            </div>
        </div>
    )
}
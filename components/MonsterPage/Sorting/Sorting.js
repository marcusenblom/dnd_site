import styles from './Sorting.module.scss';
import cn from 'classnames';

export default function MonsterSorting({ sort, active }){

    return(
        <div className={styles.sorting}>
            <div className={cn(styles.col, styles.first)}>
                <div className={styles.cr}>
                    <p className={cn(active == "challenge_rating" && styles.active, active == "challenge_rating-" && styles.active + " " + styles.up)} onClick={()=>{sort("challenge_rating")}}>CR</p>
                </div>
                <div className={styles.name}>
                    <p className={cn(active == "name" && styles.active, active == "name-" && styles.active + " " + styles.up)} onClick={()=>{sort("name")}}>Name</p>
                </div>
            </div>

            <div className={cn(styles.col, styles.second)}>
                <div className={styles.size}>
                    <p className={cn(active == "size" && styles.active, active == "size-" && styles.active + " " + styles.up)} onClick={()=>{sort("size")}}>Size</p>
                </div>
                <div className={styles.type}>
                    <p className={cn(active == "type" && styles.active, active == "type-" && styles.active + " " + styles.up)} onClick={()=>{sort("type")}}>Type</p>
                </div>
            </div>
        </div>
    )
}
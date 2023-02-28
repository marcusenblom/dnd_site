import styles from "./Curtain.module.scss";
import cn from 'classnames';

export default function Curtain({ closed }){

    return(
        <div className={styles.wrapper}>

            <div className={styles.inner}>
                <div className={cn(styles.left, closed && styles.closed)}>
                    <img src="/img/curtains/door_left.jpg" alt="" />
                </div>

                <div className={cn(styles.right, closed && styles.closed)}>
                    <img src="/img/curtains/door_right.jpg" alt="" />
                </div>
            </div>
            
        </div>
    )
}
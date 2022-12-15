import styles from './BackgroundOption.module.scss';
import cn from 'classnames';

export default function BackgroundOption({bgImage, handleChange, bgNumber}){

    function select(){
        handleChange("bgImage", bgNumber);
    }

    return(
        <li className={cn(styles.li, bgImage == bgNumber && styles.selected)} onClick={select}>
            <img className={styles.bgImage} src={`/img/battles/battle_${bgNumber}.jpg`} alt="" />
            {bgImage == bgNumber && <div className={styles.checked}>
                <span>Selected</span>
            </div>}
        </li>
    )
}
import styles from './HeroCharacter.module.scss';
import cn from 'classnames';

export default function HeroCharacter({ name, race }){

    return(
        <div className={styles.hero}>
            <p>{name}</p>
            <p>{race}</p>
        </div>
    )
}
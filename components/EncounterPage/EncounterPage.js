import styles from './EncounterPage.module.scss';
import cn from 'classnames';
import Encounters from './Encounters/Encounters';

export default function EncounterPage({}){

    return(
        <section className={styles.main}>
            <Encounters />
        </section>
    )
}
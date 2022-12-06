import styles from './LandingPage.module.scss';
import cn from 'classnames';

export default function LandingPage({}){

    return(
        <section className={styles.main}>

            <div className={cn(styles.section, styles.sectionOne)}>
                <div className={styles.bg}></div>

                <div className={styles.content}>
                    <p>“The secret we should never let the gamemasters know is that they don't need any rules.”</p>
                </div>
            </div>

            <div className={cn(styles.section, styles.sectionTwo)}>
                <div className={styles.bg}></div>

                <div className={styles.content}>
                    <h1>“You are not entering this world in the usual manner, for you are setting forth to be a Dungeon Master. Certainly there are stout fighters, mighty magic-users, wily thieves, and courageous clerics who will make their mark in the magical lands of D&D adventure. You however, are above even the greatest of these, for as DM you are to become the Shaper of the Cosmos. It is you who will give form and content to the all the universe. You will breathe life into the stillness, giving meaning and purpose to all the actions which are to follow.”</h1>
                </div>
            </div>

            <div className={cn(styles.section, styles.sectionThree)}>
                <div className={styles.bg}></div>

                <div className={styles.content}>
                    <p>“May it be a light to you in dark places, when all other lights go out.”</p>
                </div>
            </div>

        </section>
    )
}
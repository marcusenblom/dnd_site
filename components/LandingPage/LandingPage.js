import styles from './LandingPage.module.scss';

export default function LandingPage({}){

    return(
        <section className={styles.main}>

            <div className={styles.bg}></div>

            <div className={styles.content}>
                <h1>Välkommen Fribbe</h1>
            </div>

        </section>
    )
}
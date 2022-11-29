import Link from "next/link";
import styles from "./MonsterPage.module.scss";

export default function MonsterPage({ monsters, count }){

    return(
        <section className={styles.main}>
            <h2>Monsters</h2>
            <ul>
                {monsters?.length > 0 && monsters?.map((monster, i) => {
                    return <Link key={i} href={`/monsters/${monster?.index}`}><li>{monster?.name}</li></Link>
                })}
            </ul>
        </section>
    )
}
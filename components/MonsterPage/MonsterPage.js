import Link from "next/link";
import MonsterCard from "./MonsterCard/MonsterCard";
import styles from "./MonsterPage.module.scss";

export default function MonsterPage({ monsters, count }){

    console.log(monsters);
    return(
        <section className={styles.main}>
            <ul className={styles.monsterList}>
                {monsters?.length > 0 && monsters?.map((monster, i) => {
                    return <MonsterCard key={i} index={i} monster={monster}/>
                })}
            </ul>
        </section>
    )
}
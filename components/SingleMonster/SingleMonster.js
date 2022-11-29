import styles from './SingleMonster.module.scss';
import cn from 'classnames';
import Link from 'next/link';

export default function SingleMonster({ monster }){
    
    return(
        <section className={styles.monster}>
            <Link href="/monsters">Tillbaka</Link>
            <h2>{monster?.name}</h2>
            <img src={monster?.image ? `${process.env.NEXT_PUBLIC_API_URL}${monster?.image}` : `/img/placeholders/${monster?.type || "beast"}.jpg`} alt=""/>
            {JSON.stringify(monster)}
        </section>
    )
}
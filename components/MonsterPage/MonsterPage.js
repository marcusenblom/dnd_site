import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MonsterCard from "./MonsterCard/MonsterCard";
import MonsterFilter from "./MonsterFilter/MonsterFilter";
import styles from "./MonsterPage.module.scss";

export default function MonsterPage({ monsters, count }){
    const router = useRouter();
    const [perPage, setPerPage] = useState(50);
    const [monstersToShow, setMonstersToShow] = useState([]);
    const [filterData, setFilterData] = useState({

    });

    useEffect(()=>{
        let startIndex = 149;
        let sliced = monsters?.slice(startIndex, startIndex + 50);
        setMonstersToShow(sliced);
    }, []);

    function filter(){
        let startIndex = 149;
        let sliced = monsters?.slice(startIndex, startIndex + 50);
        setMonstersToShow(sliced);
    }

    return(
        <section className={styles.main}>

            {/* <div className={styles.bg}></div> */}
            
            <div className={styles.content}>

                <MonsterFilter />

                <ul className={styles.monsterList}>
                    {monstersToShow?.length > 0 && monstersToShow?.map((monster, i) => {
                        return <MonsterCard key={i} index={i} monster={monster}/>
                    })}
                </ul>
            </div>

        </section>
    )
}
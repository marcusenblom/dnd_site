import Pagination from "components/Utils/Pagination/Pagination";
import { scrollToTargetElement } from "lib/helpFunctions";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MonsterCard from "./MonsterCard/MonsterCard";
import MonsterFilter from "./MonsterFilter/MonsterFilter";
import styles from "./MonsterPage.module.scss";
import MonsterSorting from "./Sorting/Sorting";

export default function MonsterPage({ monsters, count }){
    const router = useRouter();
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState([]);
    const [perPage, setPerPage] = useState(30);
    const [monstersToShow, setMonstersToShow] = useState([]);

    useEffect(()=>{
        filter();
    }, [router]);

    function filter(){
        let queries = router?.query;
        console.log(queries);

        let matches = [];
        
        // let startIndex = 149;
        // let sliced = monsters?.slice(startIndex, startIndex + 50);
        // setMonstersToShow(sliced);

        // Type
        matches = monsters?.filter(mon => !queries?.type || queries?.type?.includes(mon?.type));

        console.log(matches);

        let totalPages = Math.ceil(matches?.length / perPage);
        let pageNumbers = [];
        console.log(pageNumbers);
        console.log(matches.length / perPage);
        for (let i = 0; i < totalPages; i++) {
            pageNumbers.push(i + 1);
        }

        // If oldPage is not active anymore, move the current page down to the top page of the new filter
        let oldPage = page;
        if(!pageNumbers?.includes(oldPage)){
            setPage(pageNumbers[pageNumbers?.length -1]);
        }
        setPages(pageNumbers);
        setMonstersToShow(matches);
    }

    function changePage(page){
        console.log(window.scrollY);
        setPage(page);
        if(window?.scrollY && window?.scrollY > 400){
            scrollToTargetElement("monsterList");
        }
    }

    return(
        <section className={styles.main}>

            {/* <div className={styles.bg}></div> */}
            
            <div className={styles.content}>

                <MonsterFilter />

                <Pagination currentPage={page} pages={pages} setPage={changePage} hideOnMobile={true}/>

                <MonsterSorting />
                <ul className={styles.monsterList}>
                    {monstersToShow?.length > 0 && monstersToShow?.slice((page - 1 )* perPage, ((page - 1 )* perPage) + perPage).map((monster, i) => {
                        return <MonsterCard key={monster?.index} index={i} monster={monster}/>
                    })}
                </ul>
                
                <Pagination currentPage={page} pages={pages} setPage={changePage}/>
                
            </div>

        </section>
    )
}
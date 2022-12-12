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
    const [sortedBy, setSortedBy] = useState("cr");
    const [monstersToShow, setMonstersToShow] = useState([]);

    useEffect(()=>{
        filter();

        // monsters.forEach(mon => {
        //     mon?.actions?.forEach(ac => {
        //         if(ac?.usage != undefined){
        //             console.log(ac?.usage);
        //         }
        //     });
        // });
    }, [router]);

    function filter(){
        let queries = router?.query;
        let matches = [];

        matches = monsters?.filter(mon => !queries?.type || queries?.type?.includes(mon?.type));

        let totalPages = Math.ceil(matches?.length / perPage);
        let pageNumbers = [];

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

    function sortMonsters(basedOn){
        let arr = [...monstersToShow];
        let sorted = [];

        if(basedOn == "challenge_rating"){
            if(sortedBy == "challenge_rating-"){
                sorted = arr?.sort(function(a, b) {
                    return b?.challenge_rating - a?.challenge_rating;
                });
                setSortedBy("challenge_rating");
            } else {
                sorted = arr?.sort(function(a, b) {
                    return a?.challenge_rating - b?.challenge_rating;
                });
                setSortedBy("challenge_rating-")
            }
        } else if(basedOn == "name"){
            if(sortedBy == "name-"){
                sorted = arr?.sort((a, b) => b?.name.localeCompare(a?.name));
                setSortedBy("name")
            } else {
                sorted = arr?.sort((a, b) => a?.name.localeCompare(b?.name));
                setSortedBy("name-");
            }
        } else if(basedOn == "size"){
            if(sortedBy == "size-"){
                sorted = arr?.sort((a, b) => a?.size.localeCompare(b?.size));
                setSortedBy("size")
            } else {
                sorted = arr?.sort((a, b) => b?.size.localeCompare(a?.size));
                setSortedBy("size-");
            }
        } else if(basedOn == "type"){
            if(sortedBy == "type-"){
                sorted = arr?.sort((a, b) => b?.type.localeCompare(a?.type));
                setSortedBy("type")
            } else {
                sorted = arr?.sort((a, b) => a?.type.localeCompare(b?.type));
                setSortedBy("type-");
            }
        } else {
            setSortedBy("cr")
        }

        setMonstersToShow(sorted);
    }

    return(
        <section className={styles.main}>

            {/* <div className={styles.bg}></div> */}
            
            <div className={styles.content}>

                <MonsterFilter />

                <MonsterSorting sort={sortMonsters} active={sortedBy}/>
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
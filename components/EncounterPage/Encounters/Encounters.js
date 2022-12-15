import styles from './Encounters.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import EncounterCard from './EncounterCard/EncounterCard';
import { generateId } from 'lib/helpFunctions';
import AddNewCard from './AddNewCard/AddNewCard';
import CreateNewEncounterWindow from './CreateNewEncounterWindow/CreateNewEncounterWindow';

export default function Encounters({}){
    const [encounters, setEncounters] = useState([]);
    const [creating, setCreating] = useState(false);

    useEffect(()=>{
        getEncounters();
    }, []);

    console.log("Encounters:");
    console.log(encounters);

    function getEncounters(){
        let encounters = JSON.parse(localStorage.getItem("encounters")) || [];
        let sorted = encounters?.sort(function(a, b) {
            return new Date(b?.createdAt || b?.createdAt) - new Date(a?.createdAt || a?.createdAt);
        });
        setEncounters(sorted);
    }

    function createNewEncounter(){
        let encounters = JSON.parse(localStorage.getItem("encounters")) || [];
        
        let id = generateId("encounter");

        let newEncounter = {
            id: id,
            createdAt: new Date(),
            name: "Test",
            monsters: [],

        }

        encounters?.push({
            id: newEncounter?.id,
            createdAt: newEncounter?.createdAt,
            name: newEncounter?.name
        });
        localStorage.setItem("encounters", JSON.stringify(encounters));
        getEncounters();

        localStorage.setItem("encounter:" + id, JSON.stringify(newEncounter));

    }

    return(
        <div className={styles.encounters}>
            <div className={styles.headerContainer}>
                <h2 className={styles.header}>Encounters</h2>
            </div>
            
            <div className={styles.content}>
                <AddNewCard createNewEncounter={()=>{setCreating(!creating)}} amountOfEncounters={encounters?.length || 1}/>

                <CreateNewEncounterWindow show={creating}/>

                <div className={styles.subHeaderContainer}>
                    <h3 className={styles.subHeader}>My encounters</h3>
                </div>
                <div className={styles.encounterList}>
                    <ul className={styles.list}>
                        {encounters?.length > 0 && encounters?.map((en, i) => {
                            return <EncounterCard key={i} index={i} encounter={en}/>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
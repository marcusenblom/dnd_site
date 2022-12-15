import styles from './Encounters.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import EncounterCard from './EncounterCard/EncounterCard';
import { generateId } from 'lib/helpFunctions';

export default function Encounters({}){
    const [encounters, setEncounters] = useState([]);

    useEffect(()=>{
        getEncounters();
    }, []);

    console.log("Encounters:");
    console.log(encounters);

    function getEncounters(){
        let encounters = JSON.parse(localStorage.getItem("encounters")) || [];
        setEncounters(encounters);
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
                <div className={styles.encounterList}>
                    <ul className={styles.list}>
                        {encounters?.length > 0 && encounters?.map((en, i) => {
                            return <EncounterCard key={i} encounter={en}/>
                        })}
                    </ul>
                </div>

                <div className={styles.addNew}>
                    <button type="button" onClick={createNewEncounter}>Create new encounter</button>
                </div>
            </div>
        </div>
    )
}
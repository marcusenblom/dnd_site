import styles from './Encounters.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import EncounterCard from './EncounterCard/EncounterCard';
import { generateId } from 'lib/helpFunctions';
import AddNewCard from './AddNewCard/AddNewCard';
import CreateNewEncounterWindow from './CreateNewEncounterWindow/CreateNewEncounterWindow';
import { Encounter } from 'classes/encounter';

export default function Encounters({}){
    const [encounters, setEncounters] = useState([]);
    const [creating, setCreating] = useState(false);

    useEffect(()=>{
        getEncounters();
    }, []);

    function getEncounters(){
        let encounters = JSON.parse(localStorage.getItem("encounters")) || [];
        let sorted = encounters?.sort(function(a, b) {
            return new Date(b?.createdAt || b?.createdAt) - new Date(a?.createdAt || a?.createdAt);
        });
        setEncounters(sorted);
    }

    function createNewEncounter(name, bg){
        let encounters = JSON.parse(localStorage.getItem("encounters")) || [];
        
        let id = generateId();

        let newEncounter = new Encounter({
            id: id,
            createdAt: new Date(),
            name: name,
            bgImage: bg
        });

        encounters?.push({
            id: newEncounter?.id,
            createdAt: newEncounter?.createdAt,
            name: newEncounter?.name,
            bgImage: newEncounter?.bgImage
        });
        localStorage.setItem("encounters", JSON.stringify(encounters));

        setCreating(false);

        getEncounters();

        localStorage.setItem("encounter:" + id, JSON.stringify(newEncounter));
    }

    function deleteEncounter(id){
        let encounters = JSON.parse(localStorage.getItem("encounters")) || [];
        
        let filtered = encounters?.filter(enc => enc?.id != id);

        localStorage.setItem("encounters", JSON.stringify(filtered));
        getEncounters();

        localStorage.removeItem(`encounter:${id}`);
    }

    return(
        <div className={styles.encounters}>
            <div className={styles.headerContainer}>
                <h2 className={styles.header}>Encounters</h2>
            </div>
            
            <div className={styles.content}>
                <AddNewCard createNewEncounter={()=>{setCreating(true)}} creating={creating}/>

                <CreateNewEncounterWindow creating={creating} setCreating={setCreating} create={createNewEncounter}/>

                {encounters?.length > 0 && 
                <div className={styles.subHeaderContainer}>
                    <h3 className={styles.subHeader}>My encounters</h3>
                </div>
                }
                <div className={styles.encounterList}>
                    <ul className={styles.list}>
                        {encounters?.length > 0 && encounters?.map((en, i) => {
                            return <EncounterCard key={en?.id} index={i} encounter={en} deleteEncounter={deleteEncounter}/>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
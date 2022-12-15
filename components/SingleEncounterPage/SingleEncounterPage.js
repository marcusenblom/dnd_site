import styles from './SingleEncounterPage.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';

export default function SingleEncounterPage({id}){
    const [encounter, setEncounter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        let enc = JSON.parse(localStorage.getItem(`encounter:${id}`));
        console.log(enc);
        setEncounter(enc);

        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, [id]);

    return(
        <>
            {loading ? "Loading.." : encounter ?

            <section className={styles.main}>
                <h1 style={{"textAlign": "center", "width": "100%", "fontSize": "40px"}}>{encounter?.name}</h1>
            </section>

            : "Encounter not found" 
            }
        </>
    )
}
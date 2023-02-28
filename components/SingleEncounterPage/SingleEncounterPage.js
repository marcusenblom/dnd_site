import styles from './SingleEncounterPage.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import Curtain from 'components/Utils/Curtain/Curtain';

export default function SingleEncounterPage({id}){
    const [encounter, setEncounter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showCurtain, setShowCurtain] = useState(false);

    useEffect(()=>{
        
        setTimeout(() => {
            setShowCurtain(true);
        }, 100);

        let enc = JSON.parse(localStorage.getItem(`encounter:${id}`));
        console.log(enc);
        setEncounter(enc);

        setTimeout(() => {
            setShowCurtain(false);
            setLoading(false);
        }, 2000);
    }, [id]);

    return(
        <>
            <Curtain closed={showCurtain}/>
            <section className={styles.main}>
                <div className={styles.bg}></div>
                
                <div className={cn(styles.content, loading && styles.hide)}>
                    <h1 style={{"textAlign": "center", "width": "100%", "fontSize": "40px"}}>{encounter?.name}</h1>
                </div>
        
            </section>
        </>
    )
}
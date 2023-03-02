import styles from './SingleEncounterPage.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import Curtain from 'components/Utils/Curtain/Curtain';
import CreateNewCharacter from './CreateNewCharacter/CreateNewCharacter';
import TopBar from './TopBar/TopBar';

export default function SingleEncounterPage({id}){
    const [encounter, setEncounter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showCurtain, setShowCurtain] = useState(false);

    const [creatingNewCharacter, setCreatingNewCharacter] = useState(false);


    useEffect(()=>{
        initializeLoad();
    }, [id]);

    useEffect(()=>{
        updateLocalStorage();
    }, [encounter]);

    function initializeLoad(){
        setTimeout(() => {
            setShowCurtain(true);
        }, 100);

        let enc = JSON.parse(localStorage.getItem(`encounter:${id}`));
        console.log(enc);
        setEncounter(enc);

        setTimeout(() => {
            setShowCurtain(false);
            setLoading(false);
        }, 1000);
    }

    function updateLocalStorage(){
        console.log("updating local");
        console.log(encounter);
        localStorage.setItem(`encounter:${id}`, JSON.stringify(encounter));
    }

    function createNewCharacter(settings){

    }

    return(
        <>
            <Curtain closed={showCurtain}/>
            <section className={styles.main}>
                <div className={styles.bg}></div>
                
                <div className={cn(styles.content, loading && styles.hide)}>
                    
                    <TopBar name={encounter?.name} setCreatingNewCharacter={()=>{setCreatingNewCharacter(true)}} creatingNewCharacter={creatingNewCharacter}/>

                    <CreateNewCharacter creating={creatingNewCharacter} setCreating={setCreatingNewCharacter} create={createNewCharacter}/>

                    
                </div>

                

            </section>
        </>
    )
}
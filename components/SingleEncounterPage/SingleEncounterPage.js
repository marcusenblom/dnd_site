import styles from './SingleEncounterPage.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import Curtain from 'components/Utils/Curtain/Curtain';
import CreateNewCharacter from './CreateNewCharacter/CreateNewCharacter';
import TopBar from './TopBar/TopBar';
import { Hero } from 'classes/hero';
import { generateId } from 'lib/helpFunctions';
import { Monster } from 'classes/monster';
import CharacterList from './CharacterList/CharacterList';

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
        localStorage.setItem(`encounter:${id}`, JSON.stringify(encounter));
    }

    function createNewHero(hero){
        let newEnc = {...encounter};

        let id = generateId();
        let newHero = new Hero({
            id: id,
            name: hero?.name,
            race: hero?.race
        })

        newEnc?.heroes?.push(newHero);
        setEncounter(newEnc);
    }

    function createNewMonster(monster){
        let newEnc = {...encounter};

        let id = generateId();
        let newMonster = new Monster({
            id: id,
            name: monster?.name,
            monster_type: monster?.monster_type,
            max_hp: monster?.max_hp,
            curr_hp: monster?.max_hp,
            ac: monster?.ac
        })

        newEnc?.monsters?.push(newMonster);
        setEncounter(newEnc);
    }

    return(
        <>
            <Curtain closed={showCurtain}/>
            <section className={styles.main}>
                <div className={styles.bg}></div>
                
                <div className={cn(styles.content, loading && styles.hide)}>
                    
                    <TopBar name={encounter?.name} setCreatingNewCharacter={()=>{setCreatingNewCharacter(true)}} creatingNewCharacter={creatingNewCharacter}/>

                    <CreateNewCharacter creating={creatingNewCharacter} setCreating={setCreatingNewCharacter} createNewHero={createNewHero} createNewMonster={createNewMonster}/>

                    <CharacterList encounter={encounter} setEncounter={setEncounter}/>
                    
                </div>

                

            </section>
        </>
    )
}
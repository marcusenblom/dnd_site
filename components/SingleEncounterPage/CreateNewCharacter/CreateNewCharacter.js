import styles from './CreateNewCharacter.module.scss';
import cn from 'classnames';
import TextInput from 'components/Utils/TextInput/TextInput';
import { useState } from 'react';
import InputLabel from 'components/Utils/InputLabel/InputLabel';
import MonsterForm from './MonsterForm/MonsterForm';
import HeroForm from './HeroForm/HeroForm';
import CharacterTypeSelection from './CharacterTypeSelection/CharacterTypeSelection';

export default function CreateNewCharacter({ creating, setCreating, createNewHero, createNewMonster }){
    const [characterType, setCharacterType] = useState("");

    function createMonster(monster){
        createNewMonster(monster);
        setCharacterType("");
    }
    function createHero(hero){
        createNewHero(hero);
        setCharacterType("");
    }

    function close(){
        setCreating(!creating);
        
        setTimeout(() => {
            setCharacterType("");
        }, 500);
    }

    return(
        <div className={cn(styles.createNew, creating && styles.show)}>
            <div className={styles.createNewWindow}>

                <div className={styles.topHeader}>
                    <p className={styles.header}>{characterType == "hero" ? "Creating new hero" : characterType == "monster" ? "Creating new monster" : "Create new character"}</p>
                    <div className={styles.close} onClick={close}>
                        <div className={cn(styles.line, styles.lineOne)}></div>
                        <div className={cn(styles.line, styles.lineTwo)}></div>
                    </div>
                </div>
               
                {characterType == "" ?
                <CharacterTypeSelection setCharacterType={setCharacterType}/>
                :
                <div className={styles.formData}>
                    {characterType == "monster" ? 
                        <MonsterForm createThis={createMonster}/>
                        : characterType == "hero" ?
                        <HeroForm createThis={createHero}/>
                        : null
                    }
                </div>
                }
            </div>
        </div>
    )
}
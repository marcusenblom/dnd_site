import styles from './CreateNewCharacter.module.scss';
import cn from 'classnames';
import TextInput from 'components/Utils/TextInput/TextInput';
import { useState } from 'react';
import InputLabel from 'components/Utils/InputLabel/InputLabel';
import MonsterForm from './MonsterForm/MonsterForm';
import HeroForm from './HeroForm/HeroForm';

export default function CreateNewCharacter({ creating, setCreating, create }){
    const [characterType, setCharacterType] = useState("");
    const [monsterData, setMonsterData] = useState({
        name: "",
        monster_type: "",
        max_hp: "",
        ac: "",
    });
    const [heroData, setHeroData] = useState({
        name: "",
        race: ""
    });

    function handleMonsterChange(name, value){
        setMonsterData(monsterData => ({
            ...monsterData,
            [name]: value
        }));
    }
    function handleHeroChange(name, value){
        setHeroData(heroData => ({
            ...heroData,
            [name]: value
        }));
    }

    function createMonster(){
        console.log(monsterData);
        // if(monsterData?.name?.length > 0 && monsterData?.bgImage?.length > 0){
        //     create(monsterData?.name, monsterData?.bgImage);
        //     setMonsterData({
        //         name: "",
        //         bgImage: "1"
        //     });
        // }
    }
    function createHero(){
        console.log(heroData);
    }


    function close(){
        setCreating(!creating);
        setMonsterData({
            name: "",
            bgImage: "1"
        });
    }

    return(
        <div className={cn(styles.createNew, creating && styles.show)}>
            <div className={styles.createNewWindow}>

                <div className={styles.topHeader}>
                    <p className={styles.header}>Create new character</p>
                    <div className={styles.close} onClick={close}>
                        <div className={cn(styles.line, styles.lineOne)}></div>
                        <div className={cn(styles.line, styles.lineTwo)}></div>
                    </div>
                </div>

               
                {characterType == "" ?
                "hello"
                :
                <div className={styles.formData}>
                    {characterType == "monster" ? 
                        <MonsterForm monsterData={monsterData} handleChange={handleMonsterChange} createThis={createMonster}/>
                        : characterType == "hero" ?
                        <HeroForm monsterData={heroData} handleChange={handleHeroChange} createThis={createHero}/>
                        : null
                    }
                </div>
                }
            </div>
        </div>
    )
}
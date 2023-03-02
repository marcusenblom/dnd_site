import styles from './HeroForm.module.scss';
import cn from 'classnames';
import TextInput from 'components/Utils/TextInput/TextInput';
import { useEffect, useState } from 'react';
import FreeTextWithSuggestions from 'components/Utils/FreeTextWithSuggestions/FreeTextWithSuggestions';
import {heroRaces} from 'lib/heroRaces';
import InputLabel from 'components/Utils/InputLabel/InputLabel';

export default function HeroForm({ createThis }){
    const [raceNames, setRaceNames] = useState([])
    const [heroData, setHeroData] = useState({
        name: "",
        race: "",
    });

    useEffect(()=>{
        let names = heroRaces?.map(race => race?.name);
        setRaceNames(names);
    }, [])

    function handleChange(name, value){
        setHeroData(heroData => ({
            ...heroData,
            [name]: value
        }));
    }

    function createHero(){
        createThis(heroData);
    }

    return(
        <div className={styles.form}>
           
            <div className={styles.inputWrapper}>
                <div className={styles.inputContainer}>
                    <TextInput label="Name" type="text" value={heroData?.name} handleChange={handleChange} name="name" placeholder="Hero name"/>
                </div>

                <div className={styles.inputContainer}>
                    <InputLabel label="Race"/>
                    <FreeTextWithSuggestions value={heroData?.race} placeholder="Hero race" handleChange={(name, value)=>{handleChange("race", value)}} options={raceNames} dropDownHeight="100px" onClickTrigger={(value)=>{handleChange("race", value)}} hideButton={true}/>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <button type="button" onClick={createHero}>Create hero</button>
            </div>
        </div>
    )
}
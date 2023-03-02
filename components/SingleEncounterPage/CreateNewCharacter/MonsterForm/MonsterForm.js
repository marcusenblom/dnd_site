import styles from './MonsterForm.module.scss';
import cn from 'classnames';
import TextInput from 'components/Utils/TextInput/TextInput';
import { useEffect, useState } from 'react';
import InputLabel from 'components/Utils/InputLabel/InputLabel';
import FreeTextWithSuggestions from 'components/Utils/FreeTextWithSuggestions/FreeTextWithSuggestions';
import { monsterTypes } from 'lib/db/monsterTypes';

export default function MonsterForm({ createThis }){
    const [monsterData, setMonsterData] = useState({
        name: "",
        monster_type: "",
        max_hp: "",
        ac: "",
    });

    function handleChange(name, value){
        setMonsterData(monsterData => ({
            ...monsterData,
            [name]: value
        }));
    }

    function createMonster(){
        createThis(monsterData);
    }

    return(
        <div className={styles.form}>
           
            <div className={styles.inputWrapper}>
                <div className={styles.inputContainer}>
                    <TextInput label="Name" type="text" placeholder="monster name" value={monsterData?.name} handleChange={handleChange} name="name"/>
                </div>

                <div className={styles.inputContainer}>
                    <InputLabel label="Type of monster"/>
                    <FreeTextWithSuggestions value={monsterData?.monster_type} placeholder="monster type" handleChange={(name, value)=>{handleChange("monster_type", value)}} options={monsterTypes} dropDownHeight="140px" onClickTrigger={(value)=>{handleChange("monster_type", value)}} hideButton={true}/>

                </div>

                <div className={styles.inputContainer}>
                    <TextInput label="Max hitpoints" type="number" placeholder="max hitpoints" value={monsterData?.max_hp} handleChange={(name, value)=>{handleChange(name, parseInt(value))}} name="max_hp"/>
                </div>

                <div className={styles.inputContainer}>
                    <TextInput label="Armor class" type="number" placeholder="armor class" value={monsterData?.ac} handleChange={(name, value)=>{handleChange(name, parseInt(value))}} name="ac"/>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <button type="button" onClick={createMonster}>Create monster</button>
            </div>
        </div>
    )
}
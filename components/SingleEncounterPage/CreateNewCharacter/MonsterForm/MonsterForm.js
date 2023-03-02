import styles from './MonsterForm.module.scss';
import cn from 'classnames';
import TextInput from 'components/Utils/TextInput/TextInput';
import { useState } from 'react';

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
                    <TextInput label="Name" type="text" value={monsterData?.name} handleChange={handleChange} name="name"/>
                </div>

                <div className={styles.inputContainer}>
                    <TextInput label="Type of monster" type="text" value={monsterData?.monster_type} handleChange={handleChange} name="monster_type"/>
                </div>

                <div className={styles.inputContainer}>
                    <TextInput label="Max hitpoints" type="text" value={monsterData?.max_hp} handleChange={handleChange} name="max_hp"/>
                </div>

                <div className={styles.inputContainer}>
                    <TextInput label="Armor class" type="text" value={monsterData?.ac} handleChange={handleChange} name="ac"/>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <button type="button" onClick={createMonster}>Create monster</button>
            </div>
        </div>
    )
}
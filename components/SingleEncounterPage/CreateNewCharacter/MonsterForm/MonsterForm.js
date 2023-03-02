import styles from './MonsterForm.module.scss';
import cn from 'classnames';
import TextInput from 'components/Utils/TextInput/TextInput';

export default function MonsterForm({ monsterData, handleChange, createThis }){

    return(
        <div className={styles.form}>
            <div className={styles.nameContainer}>
                <TextInput label="Name" type="text" value={monsterData?.name} handleChange={handleChange} name="name"/>
            </div>

            <div className={styles.nameContainer}>
                <TextInput label="Type of monster" type="text" value={monsterData?.monster_type} handleChange={handleChange} name="monster_type"/>
            </div>

            <div className={styles.nameContainer}>
                <TextInput label="Max hitpoints" type="text" value={monsterData?.max_hp} handleChange={handleChange} name="max_hp"/>
            </div>

            <div className={styles.nameContainer}>
                <TextInput label="Armor class" type="text" value={monsterData?.ac} handleChange={handleChange} name="ac"/>
            </div>

            <div className={styles.bottomBar}>
                <button type="button" onClick={createThis}>Create monster</button>
            </div>
        </div>
    )
}
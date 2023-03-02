import styles from './HeroForm.module.scss';
import cn from 'classnames';
import TextInput from 'components/Utils/TextInput/TextInput';

export default function HeroForm({ heroData, handleChange, createThis }){

    return(
        <div className={styles.form}>
            <div className={styles.nameContainer}>
                <TextInput label="Name" type="text" value={heroData?.name} handleChange={handleChange} name="name"/>
            </div>

            <div className={styles.nameContainer}>
                <TextInput label="Race" type="text" value={heroData?.race} handleChange={handleChange} name="race"/>
            </div>

            <div className={styles.bottomBar}>
                <button type="button" onClick={createThis}>Create hero</button>
            </div>
        </div>
    )
}
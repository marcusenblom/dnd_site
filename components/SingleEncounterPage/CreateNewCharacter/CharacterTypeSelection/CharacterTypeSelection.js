import styles from './CharacterTypeSelection.module.scss';
import cn from 'classnames';
import TextInput from 'components/Utils/TextInput/TextInput';

export default function CharacterTypeSelection({ setCharacterType }){

    return(
        <div className={styles.wrapper}>
            
            <div className={styles.optionContainer}>

                <div className={styles.option} onClick={()=>{setCharacterType("monster")}}>
                    <div className={styles.type}>
                        <p className={styles.typeText}>Monster</p>
                    </div>
                    <div className={styles.bg}>
                        <img src="/img/characterTypes/monsters.jpg" alt="" />
                    </div>
                </div>

                <div className={styles.option} onClick={()=>{setCharacterType("hero")}}>
                    <div className={styles.type}>
                        <p className={styles.typeText}>Hero</p>
                    </div>
                    <div className={styles.bg}>
                        <img src="/img/characterTypes/party.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}
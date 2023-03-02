import styles from './CharacterList.module.scss';
import cn from 'classnames';
import HeroCharacter from './HeroCharacter/HeroCharacter';
import MonsterCharacter from './MonsterCharacter/MonsterCharacter';

export default function CharacterList({ encounter, setEncounter }){

    return(
        <div className={styles.characterList}>
            {
                encounter?.monsters?.map(monster => <MonsterCharacter 
                    key={monster?.id} 
                    name={monster?.name} 
                    monster_type={monster?.monster_type} 
                    max_hp={monster?.max_hp} 
                    curr_hp={monster?.curr_hp}
                    ac={monster?.ac}
                    />
                )
            }
        </div>
    )
}
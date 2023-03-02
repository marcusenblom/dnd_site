import styles from './CharacterList.module.scss';
import cn from 'classnames';
import HeroCharacter from './HeroCharacter/HeroCharacter';
import MonsterCharacter from './MonsterCharacter/MonsterCharacter';

export default function CharacterList({ encounter, setEncounter }){


    function takeDmg(type, id, amount){
        let updatedEnc = {...encounter};

        let found;
        if(type == "monster"){
            found = updatedEnc?.monsters?.find(mon => mon?.id == id);
        } else if(type == "hero"){
            found = updatedEnc?.monsters?.find(mon => mon?.id == id);
        }
        found.curr_hp = found.curr_hp - amount;

        if(found.curr_hp < 0){
            found.curr_hp = 0;
        }

        setEncounter(updatedEnc)
    }

    function beHealed(type, id, amount){
        let updatedEnc = {...encounter};

        let found;
        if(type == "monster"){
            found = updatedEnc?.monsters?.find(mon => mon?.id == id);
        } else if(type == "hero"){
            found = updatedEnc?.monsters?.find(mon => mon?.id == id);
        }
        found.curr_hp = found.curr_hp + amount;

        if(found.curr_hp > found?.max_hp){
            found.curr_hp = found?.max_hp;
        }

        setEncounter(updatedEnc)
    }

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
                    takeDmg={(amount)=>{takeDmg("monster", monster?.id, amount)}}
                    beHealed={(amount)=>{beHealed("monster", monster?.id, amount)}}

                    />
                )
            }
        </div>
    )
}
import styles from './MonsterType.module.scss';
import cn from 'classnames';

export default function MonsterType({ imgUrl, name, active, type, addType, removeType, removeAll }){

    function toggle(){
        if(type == "all"){
            removeAll();
        } else if(active){
            removeType(type);
        } else {
            addType(type);
        }
    }

    return(
        <div className={cn(styles.type, active && styles.active)} onClick={toggle}>
            <div className={styles.icon}>
                <img src={imgUrl} alt="" />
            </div>
            <p className={styles.name}>
                {name}
            </p>
        </div>
    )
}
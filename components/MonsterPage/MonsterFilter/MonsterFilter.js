import styles from './MonsterFilter.module.scss';
import cn from 'classnames';
import MonsterType from './MonsterType/MonsterType';

export default function MonsterFilter({}){

    return(
        <div className={styles.filterSection}>
            <div className={styles.typeList}>
                <div className={styles.header}>
                    <p>Monster types</p>
                </div>
                <div className={styles.inner}>
                    <MonsterType name="Aberration" imgUrl="/img/placeholders/aberration.jpg" active={true}/>
                    <MonsterType name="Beast" imgUrl="/img/placeholders/beast.jpg"/>
                    <MonsterType name="Celestial" imgUrl="/img/placeholders/celestial.jpg"/>
                    <MonsterType name="Construct" imgUrl="/img/placeholders/construct.jpg" active={true}/>
                    <MonsterType name="Dragon" imgUrl="/img/placeholders/dragon.jpg" active={true}/>
                    <MonsterType name="Elemental" imgUrl="/img/placeholders/elemental.jpg"/>
                    <MonsterType name="Fey" imgUrl="/img/placeholders/fey.jpg"/>
                    <MonsterType name="Fiend" imgUrl="/img/placeholders/fiend.jpg"/>
                    <MonsterType name="Humanoid" imgUrl="/img/placeholders/humanoid.jpg"/>
                    <MonsterType name="Giant" imgUrl="/img/placeholders/giant.jpg"/>
                    <MonsterType name="Monstrosity" imgUrl="/img/placeholders/monstrosity.jpg"/>
                    <MonsterType name="Ooze" imgUrl="/img/placeholders/ooze.jpg"/>
                    <MonsterType name="Plant" imgUrl="/img/placeholders/plant.jpg"/>
                    <MonsterType name="Undead" imgUrl="/img/placeholders/undead.jpg"/>
                </div>
            </div>

            <div className={styles.inputWrapper}>
                
            </div>
        </div>
    )
}
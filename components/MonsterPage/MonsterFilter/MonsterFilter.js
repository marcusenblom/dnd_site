import styles from './MonsterFilter.module.scss';
import cn from 'classnames';
import MonsterType from './MonsterType/MonsterType';
import { useRouter } from 'next/router';

export default function MonsterFilter({}){
    const router = useRouter();

    function addType(monsterType){
        let types = router?.query?.type;
        let newTypes;
        if(!types){
            newTypes = monsterType;
        } else if(typeof types == "string"){
            newTypes = [router?.query?.type, monsterType];
        } else {
            let newArr = [...types];
            newArr.push(monsterType);
            newTypes = newArr;
        }

        router.push({
            pathname: "/monsters",
            query: {...router?.query, type: newTypes}
        });
    }

    function removeType(monsterType){
        let types = router?.query?.type;
        console.log(types);
        let newTypes;
        if(!types){
            return;
        } else if(typeof types == "string"){
            newTypes = "";
        } else {
            let newArr = [...types];
            newTypes = newArr.filter(type => type != monsterType);
        }

        let newQuery = {...router?.query};
        delete newQuery?.type;

        if(newTypes || newTypes?.length > 0){
            newQuery.type = newTypes;
        }

        router.push({
            pathname: "/monsters",
            query: newQuery
        });
    }

    return(
        <div className={styles.filterSection}>
            <div className={styles.typeList}>
                <div className={styles.header}>
                    <p>Monster types</p>
                </div>
                <div className={styles.inner} id="monsterList">
                    <MonsterType name="Aberration" type={"aberration"} imgUrl="/img/placeholders/aberration.jpg" active={router?.query?.type?.includes("aberration")} addType={addType} removeType={removeType}/>
                    <MonsterType name="Beast" type={"beast"} imgUrl="/img/placeholders/beast.jpg" active={router?.query?.type?.includes("beast")} addType={addType} removeType={removeType}/>
                    <MonsterType name="Celestial" type={"celestial"} imgUrl="/img/placeholders/celestial.jpg" active={router?.query?.type?.includes("celestial")} addType={addType} removeType={removeType}/>
                    <MonsterType name="Construct" type={"construct"} imgUrl="/img/placeholders/construct.jpg" active={router?.query?.type?.includes("construct")} addType={addType} removeType={removeType}/>
                    <MonsterType name="Dragon" type={"dragon"} imgUrl="/img/placeholders/dragon.jpg" active={router?.query?.type?.includes("dragon")} addType={addType} removeType={removeType}/>
                    <MonsterType name="Elemental" type={"elemental"} imgUrl="/img/placeholders/elemental.jpg" active={router?.query?.type?.includes("elemental")} addType={addType} removeType={removeType}/>
                    <MonsterType name="Fey" type={"fey"} imgUrl="/img/placeholders/fey.jpg" active={router?.query?.type?.includes("fey")} addType={addType} removeType={removeType}/>
                    <MonsterType name="Fiend" type={"fiend"} imgUrl="/img/placeholders/fiend.jpg" active={router?.query?.type?.includes("fiend")} addType={addType} removeType={removeType}/>
                    <MonsterType name="Humanoid" type={"humanoid"} imgUrl="/img/placeholders/humanoid.jpg" active={router?.query?.type?.includes("humanoid")} addType={addType} removeType={removeType}/>
                    <MonsterType name="Giant" type={"giant"} imgUrl="/img/placeholders/giant.jpg" active={router?.query?.type?.includes("giant")} addType={addType} removeType={removeType}/>
                    <MonsterType name="Monstrosity" type={"monstrosity"} imgUrl="/img/placeholders/monstrosity.jpg" active={router?.query?.type?.includes("monstrosity")} addType={addType} removeType={removeType}/>
                    <MonsterType name="Ooze" type={"ooze"} imgUrl="/img/placeholders/ooze.jpg" active={router?.query?.type?.includes("ooze")} addType={addType} removeType={removeType}/>
                    <MonsterType name="Plant" type={"plant"} imgUrl="/img/placeholders/plant.jpg" active={router?.query?.type?.includes("plant")} addType={addType} removeType={removeType}/>
                    <MonsterType name="Undead" type={"undead"} imgUrl="/img/placeholders/undead.jpg" active={router?.query?.type?.includes("undead")} addType={addType} removeType={removeType}/>
                </div>
            </div>

            <div className={styles.inputWrapper}>
                
            </div>
        </div>
    )
}
import styles from './MonsterFilter.module.scss';
import cn from 'classnames';
import MonsterType from './MonsterType/MonsterType';
import { useRouter } from 'next/router';
import TextInput from 'components/Utils/TextInput/TextInput';
import SelectInput from 'components/Utils/SelectInput/SelectInput';
import { useState } from 'react';

export default function MonsterFilter({ searchWord, setSearchWord }){
    const router = useRouter();
    const [crOptions, setCrOptions] = useState([
        {label: "-", value: ""},
        {label: "0", value: "0"},
        {label: "1/8", value: "0.125"},
        {label: "1/4", value: "0.25"},
        {label: "1/2", value: "0.5"},
        {label: "1", value: "1"},
        {label: "2", value: "2"},
        {label: "3", value: "3"},
        {label: "4", value: "4"},
        {label: "5", value: "5"},
        {label: "6", value: "6"},
        {label: "7", value: "7"},
        {label: "8", value: "8"},
        {label: "9", value: "9"},
        {label: "10", value: "10"},
        {label: "11", value: "11"},
        {label: "12", value: "12"},
        {label: "13", value: "13"},
        {label: "14", value: "14"},
        {label: "15", value: "15"},
        {label: "16", value: "16"},
        {label: "17", value: "17"},
        {label: "18", value: "18"},
        {label: "19", value: "19"},
        {label: "20", value: "20"},
        {label: "21", value: "21"},
        {label: "22", value: "22"},
        {label: "23", value: "23"},
        {label: "24", value: "24"},
        {label: "25", value: "25"},
        {label: "26", value: "26"},
        {label: "27", value: "27"},
        {label: "28", value: "28"},
        {label: "29", value: "29"},
        {label: "30", value: "30"},
    ]);

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

    function removeAll(){
        let newQuery = {...router?.query};
        delete newQuery?.type;

        router.push({
            pathname: "/monsters",
            query: newQuery
        });
    }

    function setNewCrMin(option){
        let newQuery = {...router?.query};

        if(option?.value == ""){
            delete newQuery?.crMin;
        } else {
            newQuery.crMin = option?.value
        }

        router.push({
            pathname: "/monsters",
            query: newQuery
        });
    }

    function setNewCrMax(option){
        let newQuery = {...router?.query};

        if(option?.value == ""){
            delete newQuery?.crMax;
        } else {
            newQuery.crMax = option?.value
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
                    <MonsterType name="Show all" type={"all"} imgUrl="/img/placeholders/show_all_monsters.png" active={!router?.query?.type} addType={addType} removeType={removeType} removeAll={removeAll}/>
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
                <div className={styles.input}>
                    <TextInput value={searchWord} label="Search" name="search" handleChange={(name, value)=>{setSearchWord(value)}} search={true} placeholder="Search monster" type="text"/>
                </div>

                <div className={styles.col}>
                    <div className={cn(styles.input, styles.short)}>
                        <SelectInput label="Min. CR" name="crMin" value={crOptions?.find(opt => opt?.value == router?.query?.crMin) || crOptions[0]} id="crMin" handleChange={setNewCrMin} options={crOptions}/>
                    </div>
                    <div className={cn(styles.input, styles.short)}>
                        <SelectInput label="Max. CR" name="crMax" value={crOptions?.find(opt => opt?.value == router?.query?.crMax) || crOptions[0]} id="crMax" handleChange={setNewCrMax} options={crOptions}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
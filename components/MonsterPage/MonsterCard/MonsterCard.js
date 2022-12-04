import { formatChallengeRating } from "lib/helpFunctions";
import Link from "next/link";
import { useEffect, useState } from "react";
import cn from 'classnames';
import styles from "./MonsterCard.module.scss";

export default function MonsterCard({ monster : {strength, dexterity, constitution, intelligence, wisdom, charisma}, monster, index }){
    const [showMore, setShowMore] = useState(false);
    const [senses, setSenses] = useState([]);
    const [damageResistances, setDamageResistances] = useState([]);
    const [conditionImmunities, setConditionImmunities] = useState([]);


    useEffect(()=>{
        createSenses();
        createDamageResistances();
        createConditionImmunities();
    }, [])

    useEffect(()=>{
        if(showMore){
            console.log(monster);
        }
    }, [showMore]);

    function speedString(){
        let str = "";
        for (const [key, value] of Object.entries(monster?.speed)) {
            str = str + `${key == "walk" ? "" : key.toString()} ${value}. `
        }
        str = str.replaceAll("ft.", "feet")
        return str;
    }

    function calculateStat(stat){
        return `${stat} ( ${
            stat < 2 ? "-5" :
            stat < 4 ? "-4" :
            stat < 6 ? "-3" :
            stat < 8 ? "-2" :
            stat < 10 ? "-1" :
            stat < 12 ? "0" :
            stat < 14 ? "+1" :
            stat < 16 ? "+2" :
            stat < 18 ? "+3" :
            stat < 20 ? "+4" :
            stat < 22 ? "+5" :
            stat < 24 ? "+6" :
            stat < 26 ? "+7" :
            stat < 28 ? "+8" :
            stat < 30 ? "+9" :
            stat < 32 ? "+10" :
            stat < 34 ? "+11" :
            stat < 36 ? "+12" :
            stat < 38 ? "+13" :
            stat < 40 ? "+14" :
            ""
        } )`
    }

    function createSenses(){
        let arr = [];
        for (const [key, value] of Object.entries(monster?.senses)) {
            arr.push(`${key == "darkvision" ? "Darkvision" : key == "passive_perception" ? "Passive Perception" : key == "blindsight" ? "Blindsight" : key == "tremorsense" ? "Tremorsense" : key == "truesight" ? "Truesight" : ""} ${typeof value == "number" && key != "passive_perception" ? `+${value}` : value}, `)
        }
        let replaced = arr?.map((element, i) => {
            element = element?.replace("ft.", "feet");
            if(i == arr?.length - 1){
                element = element.slice(0, element.length - 2);
            }
            return element;
        });
        setSenses(replaced);
    }

    function createDamageResistances(){
        let arr = [];
        monster?.damage_resistances?.forEach((e, i) => {
            let string = `${e}${i != monster?.damage_resistances?.length -1 ? ", " : " "}`;
            arr.push(string);
        });
        setDamageResistances(arr);
    }

    function createConditionImmunities(){
        let arr = [];
        monster?.condition_immunities?.forEach((e, i) => {
            let string = `${e?.name}${i != monster?.condition_immunities?.length -1 ? ", " : " "}`;
            arr.push(string);
        });
        setConditionImmunities(arr);
    }

    // function damageResistancesString(){
    //     let str = "";
    //     monster?.damage_resistances?.forEach((e, i) => {
    //         str = `${str + e}${i != monster?.damage_resistances?.length -1 ? ", " : " "}`;
    //     });
    //     return str;
    // }

    if(monster?.index == "brass-dragon-wyrmling"){
        // console.log(monster?.proficiencies?.filter(prof => prof?.proficiency?.index?.includes("saving")));
        console.log(senses);
    }

    return(
        <li className={cn(styles.monster, showMore && styles.showMore)}>

            <div className={styles.firstCol} onClick={()=>{setShowMore(!showMore)}}>
                <div className={styles.crContainer}>
                    <span className={styles.cr}>{formatChallengeRating(monster?.challenge_rating)}</span>
                </div>

                <div className={styles.nameContainer}>
                    <span className={styles.name}>{monster?.name}</span>
                </div>
            </div>

            <div className={styles.secondCol} onClick={()=>{setShowMore(!showMore)}}>
                <div className={styles.sizeContainer}>
                    <span className={styles.size}>{monster?.size}</span>
                </div>

                <div className={styles.typeContainer}>
                    <span className={styles.type}>{monster?.type}</span>
                    <div className={styles.icon}>
                        <img src={`/img/placeholders/${monster?.type || "beast"}.jpg`} alt="" />
                    </div>
                </div>
            </div>

            <div className={styles.dropDownContent}>
                {monster?.desc && <div className={styles.descriptionContainer}>
                    <p className={styles.description}>{monster?.desc}</p>
                </div>}

                    <div className={styles.col}>

                        <div className={styles.row}>
                            <span className={styles.key}>Armor class:</span><span className={styles.value}>{monster?.armor_class}</span>
                        </div>

                        <div className={styles.row}>
                            <span className={styles.key}>Hitpoints:</span><span className={styles.value}>{`${monster?.hit_points} ( ${monster?.hit_points_roll} )`}</span>
                        </div>

                        <div className={styles.row}>
                            <span className={styles.key}>Speed:</span><span className={styles.value}>{speedString()}</span>
                        </div>

                        <div className={styles.divider}></div>

                        <div className={cn(styles.row, styles.statRow)}>
                            <div className={styles.stat}>
                                <span className={styles.title}>STR</span>
                                <span className={styles.statValue}>{calculateStat(strength)}</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.title}>DEX</span>
                                <span className={styles.statValue}>{calculateStat(dexterity)}</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.title}>CON</span>
                                <span className={styles.statValue}>{calculateStat(constitution)}</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.title}>INT</span>
                                <span className={styles.statValue}>{calculateStat(intelligence)}</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.title}>WIS</span>
                                <span className={styles.statValue}>{calculateStat(wisdom)}</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.title}>CHA</span>
                                <span className={styles.statValue}>{calculateStat(charisma)}</span>
                            </div>
                        </div>

                        <div className={styles.divider}></div>

                        {/* SAVING THROWS */}
                        {monster?.proficiencies?.length > 0 && monster?.proficiencies?.find(prof => prof?.proficiency?.index?.includes("saving")) &&
                        <div className={styles.row}>
                            <span className={styles.key}>Saving Throws:</span>
                            {monster?.proficiencies?.filter(prof => prof?.proficiency?.index?.includes("saving"))?.map((prof, i) => {
                                return <span key={i} className={styles.value}>{prof?.proficiency?.name?.replaceAll("Saving Throw: ", "")} +{prof?.value}{i != monster?.proficiencies?.filter(prof => prof?.proficiency?.index?.includes("saving"))?.length - 1 ? ", " : ""}</span>
                            })}
                        </div>
                        }

                        {/* SKILLS */}
                        {monster?.proficiencies?.length > 0 && monster?.proficiencies?.find(prof => !prof?.proficiency?.index?.includes("saving")) &&
                        <div className={styles.row}>
                            <span className={styles.key}>Skills:</span>
                            {monster?.proficiencies?.map((prof, i) => {
                                if(!prof?.proficiency?.index?.includes("saving")){
                                    return <span key={i} className={styles.value}>{prof?.proficiency?.name?.replaceAll("Skill: ", "")} +{prof?.value}{i != monster?.proficiencies?.length - 1 ? ", " : ""}</span>
                                } else {
                                    return ""
                                }
                            })}
                        </div>
                        }

                        {/* SENSES */}
                        {Object.entries(monster?.senses)?.length > 0 &&
                            <div className={styles.row}>
                                <span className={styles.key}>Senses:</span>
                                {senses?.length > 0 && senses?.map((sense, i)=>{
                                    return <span key={i} className={styles.value}>{sense}</span>
                                })}
                            </div>
                        }

                        {/* DAMAGE RESISTANCES */}
                        {monster?.damage_resistances?.length > 0 &&
                        <div className={styles.row}>
                            <span className={styles.key}>Damage Resistances:</span>
                            {damageResistances?.length > 0 && damageResistances?.map((res, i)=>{
                                return <span key={i} className={styles.value}>{res}</span>
                            })}
                        </div>
                        }
                        
                        {/* CONIDTION IMMUNITIES */}
                        {monster?.condition_immunities?.length > 0 &&
                        <div className={styles.row}>
                            <span className={styles.key}>Condition Immunities:</span>
                            {conditionImmunities?.length > 0 && conditionImmunities?.map((immunity, i)=>{
                                return <span key={i} className={styles.value}>{immunity}</span>
                            })}
                        </div>
                        }

                        {/* LANGUAGES */}
                        {monster?.languages?.length > 0 &&
                        <div className={styles.row}>
                            <span className={styles.value}><span className={styles.key}>Languages:</span>{monster?.languages}</span>
                        </div>
                        }

                        {/* PROFIFIENCY BONUS */}
                        {monster?.languages?.length > 0 &&
                        <div className={styles.row}>
                            <span className={styles.key}>Proficiency Bonus:</span>
                            <span className={styles.value}>
                                {
                                monster?.challenge_rating < 5 ? "+2" : 
                                monster?.challenge_rating < 9 ? "+3" :
                                monster?.challenge_rating < 13 ? "+4" :
                                monster?.challenge_rating < 17 ? "+5" :
                                monster?.challenge_rating < 21 ? "+6" :
                                monster?.challenge_rating < 25 ? "+7" :
                                monster?.challenge_rating < 29 ? "+8" : "+9"}
                            </span>
                        </div>
                        }
                        
                    </div>
            </div>

        </li>
    )
}
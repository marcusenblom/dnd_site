import { formatChallengeRating } from "lib/helpFunctions";
import Link from "next/link";
import { useEffect, useState } from "react";
import cn from 'classnames';
import styles from "./MonsterCard.module.scss";

export default function MonsterCard({ monster : {strength, dexterity, constitution, intelligence, wisdom, charisma}, monster, index }){
    const [showMore, setShowMore] = useState(false);

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

    function sensesString(){
        let str = "";
        for (const [key, value] of Object.entries(monster?.senses)) {
            str = str + `${key == "darkvision" ? "Darkvision" : key == "passive_perception" ? "Passive Perception" : key == "blindsight" ? "Blindsight" : key == "tremorsense" ? "Tremorsense" : key == "truesight" ? "Truesight" : ""} ${typeof value == "number" ? `+${value}` : value}, `
        }
        str = str.replaceAll("ft.", "feet");
        str = str.slice(0, str.length - 2);
        return str;
    }

    function damageResistancesString(){
        let str = "";
        monster?.damage_resistances?.forEach((e, i) => {
            str = `${str + e}${i != monster?.damage_resistances?.length -1 ? ", " : " "}`;
        });
        return str;
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
                                <span className={styles.value}>{calculateStat(strength)}</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.title}>DEX</span>
                                <span className={styles.value}>{calculateStat(dexterity)}</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.title}>CON</span>
                                <span className={styles.value}>{calculateStat(constitution)}</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.title}>INT</span>
                                <span className={styles.value}>{calculateStat(intelligence)}</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.title}>WIS</span>
                                <span className={styles.value}>{calculateStat(wisdom)}</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.title}>CHA</span>
                                <span className={styles.value}>{calculateStat(charisma)}</span>
                            </div>
                        </div>

                        <div className={styles.divider}></div>

                        {Object.entries(monster?.proficiencies)?.length > 0 &&
                        <div className={styles.row}>
                            <span className={styles.key}>Skills:</span>
                            {monster?.proficiencies?.map((prof, i) => {
                                return <span key={i} className={styles.value}>{prof?.proficiency?.name?.replaceAll("Skill: ", "")} +{prof?.value}{i != monster?.proficiencies?.length - 1 ? ", " : ""}</span>
                            })}
                        </div>
                        }

                        {Object.entries(monster?.senses)?.length > 0 &&
                            <div className={styles.row}>
                                <span className={styles.key}>Senses:</span>
                                <span className={styles.value}>{sensesString()}</span>
                            </div>
                        }

                        <div className={styles.row}>
                            <span className={styles.key}>Dagame Resistances:</span><span className={styles.value}>{damageResistancesString()}</span>
                        </div>
                        
                    </div>
            </div>

        </li>
    )
}
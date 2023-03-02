import MonsterPage from 'components/MonsterPage/MonsterPage';
import { monstersArray } from 'lib/db/monsters';
import { getAllMonsters, getMonster } from 'lib/monsters';
import { useEffect, useRef, useState } from 'react';

export default function Monsters({}) {

  // const all = useRef([]);

  // useEffect(()=>{
  //   go();
  // }, []);

  // async function go(){
    
  //   for (let i = 0; i < monsters.results.length; i++) {
  //     const newAll = [...all.current];
  //     const res = monstersArray[0];
  //     newAll.push(res);
  //     all.current = newAll;
  //   }
  // }
  
  return (
    <MonsterPage monsters={monstersArray} amount={monstersArray?.length}/>
  )
}

export async function getStaticProps({}){
  // const monsters = monstersArray;
  // let sorted = monsters?.sort(function(a, b) {
  //   return a?.challenge_rating - b?.challenge_rating;
  // });
  // sorted = sorted?.filter(mon => mon?.actions?.find(ac => ac?.usage != undefined))
  // sorted = sorted.slice(200,300);
  // const res = await getAllMonsters();
  // const monsters = [];

  
  // for (let i = 0; i < res.results.length; i++) {
  //   const mon = await getMonster(res?.results[i]?.index);
  //   monsters.push(mon);
  // }

  return{
    props: {
      // monsters: sorted || [],
    },
  }

}
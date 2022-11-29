import MonsterPage from 'components/MonsterPage/MonsterPage';
import { getAllMonsters } from 'lib/monsters';

export default function Monsters({monsters}) {
  
  return (
    <MonsterPage monsters={monsters?.results} amount={monsters?.count}/>
  )
}

export async function getStaticProps({}){
  const res = await getAllMonsters();

  return{
    props: {
      monsters: res || null,
    },
  }

}
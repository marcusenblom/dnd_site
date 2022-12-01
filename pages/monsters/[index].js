import SingleMonster from 'components/SingleMonster/SingleMonster';
import { apiQuery } from 'lib/apiQuery';
import { monstersArray } from 'lib/db/monsters';
import { getAllMonsters, getMonster } from 'lib/monsters';

export default function SingleMonsterPage({monster}) {

    return (
        <SingleMonster monster={monster}/>
    )
}

export async function getStaticPaths({}){
    const monsters = await getAllMonsters();
    // const monsters = monstersArray;

    let paths = [];
    monsters?.results?.forEach((monster) => {
        paths.push({params: { index: monster?.index }});
    });

    return {
        paths,
        fallback: false,
    };

}

export async function getStaticProps({ params }){
    const res = await getMonster(params?.index);
    // const damage_type = await apiQuery(res?.actions[0].damage[0].damage_type.url);

    // const res = monstersArray?.find(monster => monster?.index == params?.index);

    return{
        props: {
            monster: res || undefined,
            // damage_type: damage_type || undefined,
        },
    }

}
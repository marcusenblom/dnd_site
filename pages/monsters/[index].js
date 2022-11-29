import SingleMonster from 'components/SingleMonster/SingleMonster';
import { getImage } from 'lib/images';
import { getAllMonsters, getMonster } from 'lib/monsters';
import Link from 'next/link';

export default function SingleMonsterPage({monster}) {


    return (
        <SingleMonster monster={monster}/>
    )
}

export async function getStaticPaths({}){
    const res = await getAllMonsters();

    let paths = [];
    res?.results?.forEach((monster) => {
        paths.push({params: { index: monster?.index }});
    });

    return {
        paths,
        fallback: false,
    };

}

export async function getStaticProps({ params }){
    const res = await getMonster(params?.index);

    return{
        props: {
            monster: res || {},
        },
        revalidate: 10
    }

}
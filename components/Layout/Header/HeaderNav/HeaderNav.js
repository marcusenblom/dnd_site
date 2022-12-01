import { useRouter } from 'next/router';
import styles from './HeaderNav.module.scss';
import NavLink from './NavLink/NavLink';

export default function HeaderNav({}){
    const router = useRouter();

    return(
        <nav className={styles.nav}>
            <ul className={styles.navItems}>
                <NavLink href="/encounter" label="Encounter" active={router?.pathname?.includes("/encounter")}/>
                <NavLink href="/monsters" label="Monsters" active={router?.pathname?.includes("/monsters")}/>
                <NavLink href="/races" label="Races" active={router?.pathname?.includes("/races")}/>
                <NavLink href="/spells" label="Spells" active={router?.pathname?.includes("/spells")}/>
            </ul>
        </nav>
    )
}
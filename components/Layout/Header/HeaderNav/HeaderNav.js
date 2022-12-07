import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './HeaderNav.module.scss';
import NavLink from './NavLink/NavLink';
import cn from 'classnames';

export default function HeaderNav({ transparent }){
    const router = useRouter();

    return(
        <nav className={cn(styles.nav, transparent && styles.transparent)}>

            <div className={styles.logo}>
                <Link href="/"><img src="/logo.png" alt="logga" /></Link>
            </div>
            
            <ul className={styles.navItems}>
                <NavLink href="/encounter" label="Encounter" active={router?.pathname?.includes("/encounter")}/>
                <NavLink href="/monsters" label="Monsters" active={router?.pathname?.includes("/monsters")}/>
                <NavLink href="/races" label="Races" active={router?.pathname?.includes("/races")}/>
                <NavLink href="/spells" label="Spells" active={router?.pathname?.includes("/spells")}/>
            </ul>
        </nav>
    )
}
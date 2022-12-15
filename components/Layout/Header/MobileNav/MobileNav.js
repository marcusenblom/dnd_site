import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './MobileNav.module.scss';
import NavLink from './NavLink/NavLink';
import cn from 'classnames';

export default function MobileNav({ transparent }){
    const router = useRouter();
    const [show, setShow] = useState(false);

    useEffect(()=>{
        setShow(false);
    }, [router])

    return(
        <nav className={cn(styles.nav, transparent && styles.transparent)}>
            <div className={styles.togglerContainer}>
                <div className={cn(styles.toggler, show && styles.show)} onClick={()=>{setShow(!show)}}>
                    <div className={cn(styles.line, styles.lineOne)}></div>
                    <div className={cn(styles.line, styles.lineTwo)}></div>
                    <div className={cn(styles.line, styles.lineThree)}></div>
                </div>
            </div>

            <div className={styles.logo}>
                <img src="/logo_black.png" alt="logga" />
            </div>

            <div className={styles.right}></div>

            <div className={cn(styles.slideOutContent, show && styles.show)}>
                <div className={styles.inner}>
                    <div className={styles.logo}>
                        <img src="/logo_black.png" alt="logga" />
                    </div>
                    <ul className={styles.navItems}>
                        <NavLink href="/" label="Home" active={router?.pathname == "/"}/>
                        <NavLink href="/encounters" label="Encounters" active={router?.pathname?.includes("/encounters")}/>
                        <NavLink href="/monsters" label="Monsters" active={router?.pathname?.includes("/monsters")}/>
                        <NavLink href="/races" label="Races" active={router?.pathname?.includes("/races")}/>
                        <NavLink href="/spells" label="Spells" active={router?.pathname?.includes("/spells")}/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
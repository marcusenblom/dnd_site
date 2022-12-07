import Link from 'next/link';
import styles from './Header.module.scss';
import cn from 'classnames';
import HeaderNav from './HeaderNav/HeaderNav';
import MobileNav from './MobileNav/MobileNav';
import { useRouter } from 'next/router';

export default function Header({ }){
    const router = useRouter();

    const transparentHeaderRoutes = [
        "/"
    ]

    return(
        <header className={cn(styles.header, transparentHeaderRoutes?.includes(router?.pathname) && styles.transparent)}>
            <HeaderNav transparent={transparentHeaderRoutes?.includes(router?.asPath)}/>
            <MobileNav transparent={transparentHeaderRoutes?.includes(router?.asPath)}/>

        </header>
    )
}
import { useRouter } from 'next/router';
import { useState } from 'react';
import GlobalHead from './GlobalHead/GlobalHead';
import Header from './Header/Header';
import styles from './Layout.module.scss';
import cn from 'classnames';

export default function Layout({ children }){
    const router = useRouter();
    const [routesWOHeader, setRoutesWOHeader] = useState([
        "/encounters/[id]"
    ]);

    return(
        <section className={cn(styles.layout, routesWOHeader?.includes(router?.pathname) && styles.hideHeader)}>
            {!routesWOHeader?.includes(router?.pathname) && <Header />}


            {children}
        </section>
    )
}
import GlobalHead from './GlobalHead/GlobalHead';
import Header from './Header/Header';
import styles from './Layout.module.scss';

export default function Layout({ children }){

    return(
        <section className={styles.layout}>
            <Header />


            {children}
        </section>
    )
}
import Link from 'next/link';
import styles from './Header.module.scss';
import cn from 'classnames';
import HeaderNav from './HeaderNav/HeaderNav';

export default function Header({ }){

    return(
        <header className={styles.header}>
            <HeaderNav />
            
        </header>
    )
}
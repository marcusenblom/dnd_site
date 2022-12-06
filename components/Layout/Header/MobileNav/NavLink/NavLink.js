import Link from 'next/link';
import styles from './NavLink.module.scss';
import cn from 'classnames';

export default function NavLink({ href, label, active }){

    return(
        <li className={cn(styles.item, active && styles.active)}>
            <Link href={href}>
                <span className={styles.title}>{label}</span>
            </Link>
        </li>
    )
}
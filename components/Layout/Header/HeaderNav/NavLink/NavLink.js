import Link from 'next/link';
import styles from './NavLink.module.scss';
import cn from 'classnames';

export default function NavLink({ href, label, active }){

    return(
        <li className={cn(styles.item, active && styles.active)}>
            <div className={cn(styles.border, styles.borderTop)}></div>
            <div className={cn(styles.border, styles.borderRight)}></div>
            <div className={cn(styles.border, styles.borderBottom)}></div>
            <div className={cn(styles.border, styles.borderLeft)}></div>
            <Link href={href}>
                <span>{label}</span>
            </Link>
        </li>
    )
}
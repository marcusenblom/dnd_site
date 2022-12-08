import styles from './Pagination.module.scss';
import cn from 'classnames';

export default function Pagination({ pages, currentPage, setPage, hideOnMobile }){

    return(
        <div className={cn(styles.pagination, hideOnMobile && styles.hideOnMobile)}>
            {pages?.length > 1 && pages?.map((p) => {
                return <div key={p} className={cn(styles.page, currentPage == p && styles.active)} onClick={()=>{if(currentPage != p){setPage(p)}}}>
                    <p className={styles.number}>
                        {p}
                    </p>
                </div>
            })}
        </div>
    )
}
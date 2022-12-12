import styles from './InputLabel.module.scss'
import cn from 'classnames'

export default function InputLabel({label, htmlFor, horizontal, noLineBreak, bold, required, white, largeLabel}){


    return(
        <div className={cn(styles.customInputLabel, horizontal && styles.horizontal)}>
            <div className={styles.tooltipContainer}>
                <label className={cn(noLineBreak && styles.noLineBreak, bold && styles.bold, white && styles.white, largeLabel && styles.large)} htmlFor={htmlFor}>{label}</label>
                {required && <span className={styles.required}>*</span>}
            </div>
        </div>
    )
}
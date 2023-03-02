import styles from './TextInput.module.scss'
import cn from 'classnames'
import InputLabel from 'components/Utils/InputLabel/InputLabel'
import { useEffect, useState } from 'react';


export default function TextInput({type, value, name, label, required, disabled, handleChange, handleKeyDownEnter, handleKeyDown, maxLength, minNumber, textAreaRows, placeholder, handleOnBlur, ref, id, textAreaMaxChars, search, maxNumber}){

    function updateChange(e){
        let val = e.target.value;

        if(maxLength && val.length > maxLength){
            val = type == "number" ? parseInt(e.target.value.toString().slice(0, maxLength)) : e.target.value.toString().slice(0, maxLength);
        }

        handleChange(e.target.name, val);
    }

    const handleKeyDownFunction = (event) => {
        if (event.key.toLowerCase() === "enter" && handleKeyDownEnter) {
            handleKeyDownEnter(event);
        } else if(handleKeyDown){
            handleKeyDown(event);
        }
    };

    return(
        <div className={styles.customInput}>
            {label && <InputLabel label={label} required={required}/>}
            {type == "textarea" ?
            <>
                <textarea
                    placeholder={placeholder} 
                    className={styles.textArea} 
                    value={value}
                    name={name}
                    required={required}
                    aria-label={placeholder}
                    rows={textAreaRows}
                    onChange={(e) => { 
                        handleChange(e.target.name, e.target.value)
                    }}
                    onKeyDown={handleKeyDown ? handleKeyDown : null}
                    onBlur={handleOnBlur ? handleOnBlur : null}
                    disabled={disabled}
                    ref={ref}
                    id={id || ""}
                    maxLength={textAreaMaxChars}
                />
                {textAreaMaxChars && <p className={styles.textareaCharsCounter}>{value.length} / {textAreaMaxChars}</p>}
            </>
            :
            <div className={cn(styles.inputWrapper, search && styles.searchInput, disabled && styles.disabled)}>
                <input
                className={styles.textInput}
                required={required}
                disabled={disabled}
                type={type}
                max={maxNumber ? maxNumber : null}
                min={minNumber ? minNumber : null}
                placeholder={placeholder} 
                value={value}
                name={name}
                aria-label={placeholder}
                onKeyDown={handleKeyDownFunction}
                onChange={!disabled ? (e) => {
                    updateChange(e);
                } : null}
                ref={ref}
                id={id || null}
                />
                {search && <span className={styles.search}><img src="/img/icons/search.svg" alt="sök" /></span>}
            </div>}
        </div>
    )
}
import styles from './FreeTextWithSuggestions.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';

export default function FreeTextWithSuggestions({ value, placeholder, handleChange, required, disabled, options, dropDownHeight, onClickTrigger, showEmptyState, hideButton}){
    const [searchResults, setSearchResults] = useState([]);

    useEffect(()=>{
        if(value.length > 0){
            filterOptions();
        }
    }, [value]);

    function filterOptions(){
        if(value.length > 0){

            let filtered = [];
            
            filtered = options?.filter(opt => opt?.toLowerCase().includes(value?.toLowerCase()));

            if(filtered?.length == 1 && filtered[0].toLowerCase() == value.toLowerCase()){
                setSearchResults([]);
            } else {
                setSearchResults(filtered);
            }
        }
    }

    function handleClick(value){
        if(onClickTrigger){
            onClickTrigger(value);
        }
    }

    return(
        <div className={cn(styles.wrapper)} >
            <input 
            className={cn(styles.input, ((showEmptyState && value?.length > 0) || (!showEmptyState && searchResults?.length > 0)) && styles.searchResultsOpened)}
            type="text"
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            value={value}
            onChange={!disabled ? (e) => {handleChange(e.target.name, e.target.value)} : null}
            onBlur={()=>{setTimeout(() => {
                setSearchResults([])
            }, 100);}}
            />
            {value?.length > 0 && !hideButton && <button className={styles.remove} type="button" onClick={()=>{handleChange("", "")}}><img src="/img/icons/x_dark-red.svg" alt="" /></button>}
            {((showEmptyState && value?.length > 0) || (!showEmptyState && searchResults?.length > 0)) &&
            <div className={cn(styles.dropDown)} style={{maxHeight: dropDownHeight}}>
                <ul>
                {searchResults?.map((result, i)=>{
                    return <li key={i} >
                        <span onClick={()=>{handleClick(result)}}>{result}</span>
                    </li>
                })}
                {searchResults?.length < 1 &&
                    <li className={styles.empty}><p>No results</p></li>
                }
                </ul>
            </div>
            }
        </div>
    )
}
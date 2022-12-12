import styles from './SelectInput.module.scss'
import cn from 'classnames'
import InputLabel from 'components/Utils/InputLabel/InputLabel'
import Select from 'react-select'


export default function SelectInput({ label, id, name, placeholder, required, options, handleChange, value}){

    return(
        <div className={styles.select}>
            {label && <InputLabel label={label} required={required}/>}
            <Select
                isSearchable={false}
                id={id}
                defaultValue={options[0]}
                name={name}
                placeholder={placeholder || ""}
                action="set-value"
                value={value}
                options={options}
                className="selectDropDown"
                onChange={handleChange} 
                components={{
                    IndicatorSeparator: () => null
                }}
            />
        </div>
    )
}
import styles from './CreateNewEncounterWindow.module.scss';
import cn from 'classnames';
import TextInput from 'components/Utils/TextInput/TextInput';
import { useState } from 'react';
import InputLabel from 'components/Utils/InputLabel/InputLabel';
import BackgroundOption from './BackgroundOption/BackgroundOption';

export default function CreateNewEncounterWindow({ creating, setCreating, create }){
    const [formData, setFormData] = useState({
        name: "",
        bgImage: "1"
    });

    function handleChange(name, value){
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    function createThis(){
        if(formData?.name?.length > 0 && formData?.bgImage?.length > 0){
            create(formData?.name, formData?.bgImage);
            setFormData({
                name: "",
                bgImage: "1"
            });
        }
    }

    function close(){
        setCreating(!creating);
        setFormData({
            name: "",
            bgImage: "1"
        });
    }

    return(
        <div className={cn(styles.createNew, creating && styles.show)}>
            <div className={styles.createNewWindow}>

                <div className={styles.topHeader}>
                    <p className={styles.header}>Create new encounter</p>
                    <div className={styles.close} onClick={close}>
                        <div className={cn(styles.line, styles.lineOne)}></div>
                        <div className={cn(styles.line, styles.lineTwo)}></div>
                    </div>
                </div>

                <div className={styles.nameContainer}>
                    <TextInput label="Name" type="text" value={formData?.name} handleChange={handleChange} name="name"/>
                </div>

                <div className={styles.bgContainer}>
                    <InputLabel label="Encounter background"/>
                    <div className={styles.listWrapper}>
                        <ul>
                            <BackgroundOption bgImage={formData?.bgImage} bgNumber={"1"} handleChange={handleChange}/>
                            <BackgroundOption bgImage={formData?.bgImage} bgNumber={"2"} handleChange={handleChange}/>
                            <BackgroundOption bgImage={formData?.bgImage} bgNumber={"3"} handleChange={handleChange}/>
                            <BackgroundOption bgImage={formData?.bgImage} bgNumber={"4"} handleChange={handleChange}/>
                            <BackgroundOption bgImage={formData?.bgImage} bgNumber={"5"} handleChange={handleChange}/>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <button type="button" onClick={createThis}>Create encounter</button>
                </div>
            </div>
        </div>
    )
}
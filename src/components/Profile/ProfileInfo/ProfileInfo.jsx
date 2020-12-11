import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.content}>
                <img src='https://wallpapercave.com/wp/wp2570965.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small != null
                    ? props.profile.photos.small
                    : 'https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo.png'}
                     className={styles.picture}
                />
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;


import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default ProfileInfo;
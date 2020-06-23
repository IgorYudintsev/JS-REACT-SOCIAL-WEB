import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePosts={props.appPosts}/>
        </div>
    )
}


export default Profile;
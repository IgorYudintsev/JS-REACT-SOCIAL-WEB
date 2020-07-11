import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePosts={props.state.posts}  addPosts={props.addPosts}/>
        </div>
    )
}


export default Profile;
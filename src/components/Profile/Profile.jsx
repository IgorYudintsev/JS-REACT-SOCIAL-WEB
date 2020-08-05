import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePosts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addPosts={props.addPosts}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}


export default Profile;
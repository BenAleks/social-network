import React from 'react';
import css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div className={css.content}>
            <div>
                <img src="https://img.freepik.com/free-photo/bright-petals-gift-love-in-a-bouquet-generated-by-ai_188544-13370.jpg?w=2000&t=st=1710608096~exp=1710608696~hmac=01177e8f006ce33383bdabf98668dab7be70baa2706382b4d08673c8efe8208d" alt=""/>
            </div>
            <div>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores dicta dignissimos doloremque ea ex hic id, in, ipsam iste, mollitia neque odit praesentium quasi sed sit totam velit voluptate.</span>
            </div>
            <div>ava+des</div>
            <MyPosts/>


        </div>
    );
};

export default Profile;
import React from "react";
import './profile.css'
import profile_img from '../../assets/images/ashok1.png'
const Profile = () => {
    const scrollToAbout = () => {
        const section = document.getElementById('about');
        section.scrollIntoView({ behavior: 'smooth' });
      };
    return(
        <>
        <div className="profile">
            <div className="profile-img">
                <img src={profile_img}></img>
            </div>
            <div className="intro">
                <h1>Ashok kumar</h1>
                <h3>A passionate Software Engineer</h3>
                <div className="about-btn">
                    <button onClick={scrollToAbout}>About me</button>
                </div>
            </div>
        </div>
        
        
        </>
    )
}

export default Profile
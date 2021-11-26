import React from 'react';
import Image from '../../images/image1.png'
import "../../styles/style.css";
const ProfilePhoto = (props) => {
    return (
        <div>
            <img className="styleImage" src={Image} />
        </div>
    );
};

export default ProfilePhoto;
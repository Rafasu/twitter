import React from 'react';
import "./Post.css";
import {Avatar} from "@material-ui/core"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/Chat";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/Favorite";
import PublishIcon from "@material-ui/icons/Publish";


function Post({
    displayName, 
    username, 
    verified, 
    text, 
    image, 
    avatar,
    timestamp
}){
    return (
        <div className="post">
            <div className="post--avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post--body">
                <div className="post--header"> 
                    <div className="post--headerText">
                        <h3>
                            {displayName} <span className="post--headerSpecial">
                            {verified && <VerifiedUserIcon  className="post--badge" />}
                            @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post--headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img alt="some image" src={image}/>
                <div className="post--footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon />
                    <PublishIcon fontSize="small"/>
                </div>
            </div>
        </div>
    );
}

export default Post;
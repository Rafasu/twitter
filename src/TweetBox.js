import React, {useState} from 'react';
import "./TweetBox.css";
import {Avatar, Button} from "@material-ui/core";
import db from "./firebase.js";
import {firestore} from 'firebase';

function TweetBox(){
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    
    const sendTweet = e =>{
        e.preventDefault();
        db.collection("posts").add({
            displayName: "Rafael Solis", 
            username: "rafasu", 
            verified: true, 
            text: tweetMessage, 
            image: tweetImage, 
            avatar: "Some avatar", 
            timestamp: firestore.Timestamp.now()
        });
        
        setTweetMessage("");
        setTweetImage("");
    }
    
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox--input">
                    <Avatar src="https://www.freeimages.com/es/photo/lake-at-the-cottage-1372381" alt="Cool Pic"></Avatar>
                
            
                    <input onChange={e => setTweetMessage(e.target.value)} 
                    value={tweetMessage} placeholder="What is happenning??" type="text"/>
                    <input onChange={e=>setTweetImage(e.target.value)} 
                    value={tweetImage} placeholder="Enter Image URL" type="text"/>
                </div>
            <Button onClick={sendTweet} type="submit" className="tweetBox--button"> Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
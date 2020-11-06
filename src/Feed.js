import React, {useState, useEffect} from 'react';
import "./Feed.css";
import TweetBox from './TweetBox.js';
import Post from './Post.js';
import db from './firebase.js';
import {Button} from "@material-ui/core";
import firebase from 'firebase';


function Feed(){
    
 
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        
        
        db.collection("posts").orderBy("timestamp").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
        /*
        const tweets = [];
        db.collection("posts").onSnapshot(function(snapshot){
            snapshot.forEach(function(doc){
               tweets.push(doc.data()); 
            });
        });
        console.log(tweets);
        tweets.sort((a, b)=>{
            const dateA = a.timestamp.toDate(), dateB = b.timestamp.toDate();
            return dateA - dateB;
        });
        console.log(tweets);
        setPosts(tweets.map(function(x){
            return x;
        }));
        
        */
        /*const tweets = db.collection('posts').onSnapshot(
            snapshot =>(snapshot.docs.map(doc => doc.data())
                       
        ));
        */
        
        //const sortedTweets = tweets.sort((a, b)=>{
            //const dateA = a.timestamp.toDate(), dateB = b.timestamp.toDate();
            //return dateA - dateB;
        //});
        //setPosts(sortedTweets);
    }, []);
    
    const sortTweets = (e) =>{
        const sortedTweets = posts.sort((a, b) => {
            console.log("Llamaste a la funcion");
            const dateA = a.timestamp.toDate(), dateB = b.timestamp.toDate();
            console.log(a.timestamp.toDate());
            return dateA - dateB;
        });
        setPosts(sortedTweets);
    }
    
    return (
        <div className="feed">
            <div className="feed--header">
                <h2>Home</h2>
                <Button onClick={sortTweets}>Sort </Button>
            </div>

            <TweetBox />
        
            {posts.map(post =>
                (<Post displayName = {post.displayName}
                        username = {post.username}
                        verified = {post.verified}
                        text = {post.text}    
                        image = {post.image}
                        avatar = {post.avatar}
                />)
            )}
            <Post displayName="rafasu" 
                    username="rafasu" 
                    verified={true} 
                    text="Yeah its working" 
                    image="some image url" 
                    avatar="some avatar url"/>
       
        </div>
    );
}

export default Feed;
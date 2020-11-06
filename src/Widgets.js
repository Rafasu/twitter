import React from 'react';
import "./Widgets.css";
import {
    TwitterTimelineEmbed, 
    TwitterShareButton, 
    TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets(){
    return  (
        <div className="widgets">
            <div className="widgets--input">
                <SearchIcon className="widgets--searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>
            <div className="widgets--widgetContainer">
                <h2>What is happening?</h2>
                <TwitterTweetEmbed tweetId="858551177860055040"/>
                <TwitterTimelineEmbed sourceType="profile" screenName="rafasu" options={{height: 400}}/>
            </div>
        </div>
    );
    
}

export default Widgets;

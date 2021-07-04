import React, { useState } from "react";
import {
    EmojiIcon,
    GIFIcon,
    ImageIcon,
    PollIcon,
    ScheduleIcon,
} from "../Icons/icon";
import db from "../firebase";
import firebase from "firebase";
const TweetBox = () => {
    const [content, setContent] = useState("");
    const sendTweet = () => {
        if (content !== "") {
            db.collection("feed").add({
                displayName: "Serhat Yüksel",
                username: "@srhtt_y",
                content,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                avatar: "https://pbs.twimg.com/profile_images/1265634851702689792/0pdQAYyY_400x400.jpg",
                image: "https://images.pexels.com/photos/4299540/pexels-photo-4299540.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            });
            setContent("");
        }
    };
    return (
        <React.Fragment>
            <div className="flex flex-1 flex-col mt-2 px-2">
                <textarea
                    className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
                    placeholder="What's happening?"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                />
                <div className="flex items-center justify-between">
                    <div className="flex -ml-3">
                        <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                            <ImageIcon className="w-6 h-6 text-primary-base" />
                        </div>
                        <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                            <GIFIcon className="w-6 h-6 text-primary-base" />
                        </div>
                        <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                            <PollIcon className="w-6 h-6 text-primary-base" />
                        </div>
                        <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                            <EmojiIcon className="w-6 h-6 text-primary-base" />
                        </div>
                        <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                            <ScheduleIcon className="w-6 h-6 text-primary-base" />
                        </div>
                    </div>
                    <button
                        onClick={sendTweet}
                        className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
                    >
                        Tweet
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TweetBox;

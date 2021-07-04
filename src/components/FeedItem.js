import React from "react";
import { LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon } from "../Icons/icon";
const FeedItem = ({
    avatar,
    content,
    displayName,
    timestamp,
    username,
    image,
}) => {
    return (
        <article className="flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
            <img
                src={avatar}
                alt="Profile"
                className="w-11 h-11 rounded-full"
            />
            <div className="flex-1">
                <div className="flex items-center text-sm">
                    <h4 className="font-bold">{displayName} </h4>
                    <span className="text-gray-dark ml-2">{username} </span>
                    <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full" />
                    <span className="text-gray-dark">
                        {timestamp?.toDate().toLocaleTimeString("tr-TR")}
                    </span>
                </div>
                <p className="mb-1 text-gray-900 text-sm">{content}</p>
                {image && (
                    <img
                        src={image}
                        alt="tweet"
                        className="my-2 rounded-xl max-h-96"
                    />
                )}
                <ul className="flex justify-between max-w-md -ml-2 mt-2">
                    <li className="group flex items-center space-x-3 text-gray-dark text-sm">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-hoverBlue group-hover:text-primary-base transform transition-colors duration-600">
                            <ReplyIcon className="w-5 h-5" />
                        </div>
                        <span className="group-hover:text-primary-base transform transition-colors duration-600">5</span>
                    </li>

                    <li className="group flex items-center space-x-3 text-gray-dark text-sm">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-hover group-hover:text-green-base transform transition-colors duration-600">
                            <ReTweetIcon className="w-5 h-5" />
                        </div>
                        <span className="group-hover:text-green-base transform transition-colors duration-600">12</span>
                    </li>

                    <li className="group flex items-center space-x-3 text-gray-dark text-sm">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-red-hover group-hover:text-red-base transform transition-colors duration-600">
                            <LikeIcon className="w-5 h-5" />
                        </div>
                        <span className="group-hover:text-red-base transform transition-colors duration-600">33</span>
                    </li>

                    <li className="group flex items-center space-x-3 text-gray-dark text-sm">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-hoverBlue group-hover:text-primary-base transform transition-colors duration-600">
                            <ShareIcon className="w-5 h-5" />
                        </div>
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default FeedItem;

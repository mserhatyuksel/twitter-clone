import React from "react";

const UserInfo = () => {
    return (
        <div className="flex justify-between items-center mb-6 hover:bg-primary-extraLight rounded-full cursor-pointer py-2 px-4 transform transition-colors duration-200">
            <img
                src="https://pbs.twimg.com/profile_images/1265634851702689792/0pdQAYyY_400x400.jpg"
                alt="Profile"
                className="w-11 h-11 rounded-full"
            />
            <div className="flex flex-col">
                <span className="font-bold text-md text-black">
                    Serhat Yüksel
                </span>
                <span className="text-sm text-gray-dark">@srhtt_y</span>
            </div>
            <div className="flex space-x-1">
                <div className="w-1 h-1 bg-gray-900 rounded-full" />
                <div className="w-1 h-1 bg-gray-900 rounded-full" />
                <div className="w-1 h-1 bg-gray-900 rounded-full" />
            </div>
        </div>
    );
};

export default UserInfo;

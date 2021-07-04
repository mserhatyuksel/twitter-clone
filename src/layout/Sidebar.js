import React, { useState } from "react";
import twitterLogo from "../images/twitter-logo.svg";
import {
    HomeIcon,
    ExploreIcon,
    NotificationIcon,
    MessagesIcon,
    BookmarksIcon,
    ListsIcon,
    ProfileIcon,
    MoreIcon,
} from "../Icons/icon";
import SideLink from "../components/SideLink";
import UserInfo from "../components/UserInfo";
const sideLinks = [
    {
        name: "Home",
        icon: HomeIcon,
    },
    {
        name: "Explore",
        icon: ExploreIcon,
    },
    {
        name: "Notification",
        icon: NotificationIcon,
    },
    {
        name: "Messages",
        icon: MessagesIcon,
    },
    {
        name: "Bookmarks",
        icon: BookmarksIcon,
    },
    {
        name: "Lists",
        icon: ListsIcon,
    },
    {
        name: "Profile",
        icon: ProfileIcon,
    },
    {
        name: "More",
        icon: MoreIcon,
    },
];

const Sidebar = () => {
    const [active, setActive] = useState("Home");
    const menuItemClickHandler = (name) => {
        setActive(name);
    };
    return (
        <div className="h-screen sticky top-0 flex flex-col justify-between w-72 px-2">
            <div>
                <div className="flex items-center justify-center mt-1 mb-4 w-12 h-12 rounded-full hover:bg-gray-extraLight transform transition-colors duration-200">
                    <img
                        src={twitterLogo}
                        alt="Twitter Logo"
                        className="w-7 h-7"
                    />
                </div>
                <nav className="mb-4">
                    <ul>
                        {sideLinks.map((link) => (
                            <SideLink
                                key={link.name}
                                name={link.name}
                                Icon={link.icon}
                                active={active}
                                onMenuItemClick={menuItemClickHandler}
                            />
                        ))}
                    </ul>
                </nav>
                <button className="bg-primary-base hover:bg-primary-dark text-white rounded-full py-3 px-3 w-11/12 shadow-lg transform transition-colors duration-200">
                    Tweet
                </button>
            </div>
            <UserInfo />
        </div>
    );
};

export default Sidebar;
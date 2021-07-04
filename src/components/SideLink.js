import React from "react";

const SideLink = ({ name, Icon, active, onMenuItemClick }) => {
    const isActive = active === name;
    return (
        <li className="group cursor-pointer" onClick={() => onMenuItemClick(name)}>
            <a href={name.toLowerCase()} className="pointer-events-none block">
                <div className="inline-block">
                    <div
                        className={`flex items-center justify-items-center py-3 pl-3 pr-8 group-hover:bg-primary-extraLight group-hover:text-primary-base rounded-full ${
                            isActive ? "text-primary-base" : ""
                        } `}
                    >
                        <span><Icon /></span>
                        <span className="ml-4 font-bold text-xl hidden md:block">{name} </span>
                    </div>
                </div>
            </a>
        </li>
    );
};

export default SideLink;

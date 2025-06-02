import React from "react";

const BadgeLayout = ({
    children,
    onClick
}) => {
    return (
        <div onClick={onClick} className="rounded-full w-fit cursor-pointer font-medium border-[1.5px] border-secondary-500 overflow-hidden">
            {children}
        </div>
    )
}

export default BadgeLayout;

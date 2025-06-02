import React from "react";
import BadgeLayout from "./layout";

const BadgePrimary = (
    {
        text,
        active
    }
) => {

    
    return (
        <BadgeLayout>
            <div className={`px-[14px] py-2 hover:bg-secondary-100 text-gray-800 ${active ? 'bg-secondary-500' : 'bg-none'}`}>
                {text}
            </div>
        </BadgeLayout>
    )
}

export default BadgePrimary;
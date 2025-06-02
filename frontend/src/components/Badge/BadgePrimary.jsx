import React from "react";
import BadgeLayout from "./layout";

const BadgePrimary = (
    {
        text,
        selected = false,
        onClick
    }
) => {

    
    return (
        <BadgeLayout onClick={onClick}>
            <div className={`px-3 py-1 hover:bg-secondary-100 text-gray-800 ${selected ? 'bg-secondary-500' : 'bg-none'}`}>
                {text}
            </div>
        </BadgeLayout>
    )
}

export default BadgePrimary;
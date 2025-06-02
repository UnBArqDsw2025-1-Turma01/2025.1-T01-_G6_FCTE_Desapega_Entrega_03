import React from "react";
import BadgeLayout from "./layout";

const BadgeSecondary = ({
    text,
    icon: Icon
}) => {

    return  (
        <BadgeLayout>
            <div className="px-[14px] py-2 bg-secondary-500 flex gap-2.5 itens-center items-center">
                <div className=" text-white">
                    {text}
                </div>
                    <Icon className="text-white h-4 w-4" />
                </div>
            <div/>
        </BadgeLayout>
    )
}

export default BadgeSecondary;

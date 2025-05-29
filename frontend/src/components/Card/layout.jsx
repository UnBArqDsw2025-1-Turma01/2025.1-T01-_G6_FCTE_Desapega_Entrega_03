import React from "react";

const CardLayout = ({
    image,
    price,
    title,
    user,
    local
}) => {
    return (
        <div className="border-[1.5px] p-">
            <div className="">
                {<img src={image}></img>}
            </div>
            <div className="font-medium w-fit font-medium text-[16px] text-secondary-500 ">
                {price}
            </div>
            <div className="">
                {title} 
            </div>
            <div>
                {user}
            </div>
            <div>
                {local}
            </div>
        </div>
    )
}

export default CardLayout;
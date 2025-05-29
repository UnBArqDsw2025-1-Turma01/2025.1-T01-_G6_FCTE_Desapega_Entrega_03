import React from "react";

const CardLayout = ({
    image,
    price,
    title,
    user,
    local
}) => {
    return (
        <div className="p-4 rounded-[20px]">
            <div className="">
                <img src={image} alt="Imagem do bruto" className="w-full h-40" />
            </div>
            <div className="font-medium w-fit text-[16px] text-secondary-500 bg-orange-500">
                {price}
            </div>
            <div className="bg-blue-500">
                {title} 
            </div>
            <div className="bg-green-500">
                {user}
            </div>
            <div className="bg-yellow-500">
                {local}
            </div>
        </div>
    )
}

export default CardLayout;
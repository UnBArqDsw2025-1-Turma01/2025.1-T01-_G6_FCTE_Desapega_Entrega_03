import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";

const CardLayout = ({
    productImage,
    price = "R$ 100,00",
    title = "Guarda Chuva",
    user = "João da Silva",
    userImage,
    icon: Icon = MapPinIcon,    
    local = "São Paulo, SP",
    children,
    ...props
}) => {
    return (
        <div {...props} className="p-4 rounded-[20px] min-w-full min-h-[400px] flex flex-col justify-between">
            <img src={productImage} alt="Imagem do bruto" className="w-full h-32  rounded-[20px]" />
            <p className={`pt-[15px] font-bold text-[20px] w-fit text-secondary-500 ${!price ? 'invisible' : ''}`}>
            {price || 'R$ 100,00'}
            </p>

            <div className="flex justify-between items-center pt-[10px] pb-[20px]">
                <div>
                    <div className=" font-extrabold text-[16px] text-gray-800 w-fit">
                        {title} 
                    </div>
                    <div className="text-[14px] font-medium text-gray-600 w-fit">
                        {user}
                    </div>
                </div>
                <div>
                    <img src={userImage} alt="Imagem do usuário" className="min-w-12 h-12 rounded-full" />
                </div>
            </div>
            <div className="flex justify-start">
                <div className="m-0 p-0 flex items-center ">
                    {Icon && (
                        <div className="m-0 p-0 flex items-center ">
                            <Icon className="block leading-none h-5 w-5 text-orange-600 mr-[5px] p-0 m-0" />
                        </div>
                        )}
                </div>
                <div className="font-medium text-[14px] text-gray-800 w-fit">
                    {local}
                </div>
            </div>
            {children}
        </div>
    )
}

export default CardLayout;
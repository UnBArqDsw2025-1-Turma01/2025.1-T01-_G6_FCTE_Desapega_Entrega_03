import React from "react";

const CardLayout = ({
    productImage,
    price,
    title,
    user,
    userImage,
    icon: Icon,
    local
}) => {
    return (
        <div className="p-4 rounded-[20px] w-fit min-w-[286px] min-h-[400px] font-inter">
            <div className="">
                <img src={productImage} alt="Imagem do bruto" className="w-full h-40  rounded-[20px]" />
            </div>
            <div className="pt-[15px] font-bold text-[20px] w-fit text-secondary-500  ">
                {price}
            </div>
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
                    <img src={userImage} alt="Imagem do usuário" className="w-[60px] h-[60px] rounded-full" />
                </div>
            </div>
            <div className="flex justify-start">
                <div className="m-0 p-0 flex items-center ">
                    <Icon className="block leading-none h-5 w-5 text-orange-600 mr-[5px] p-0 m-0 " />

                </div>
                <div className="font-medium text-[14px] text-gray-800 w-fit">
                    {local}
                </div>
            </div>
            <div className="flex justify-center pt-[20px]">
                <p>Botao vai ficar aqui</p>
            </div>
        </div>
    )
}

export default CardLayout;
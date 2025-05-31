import React from "react";
import CardTerciary from "./CardTerciary";
import TemplateProduct from "./../../assets/template_produto.png";
import TemplateUser from "./../../assets/template_user.png";
import { MapPinIcon } from "@heroicons/react/24/solid";



export default {
    title: "Card/CardTerciary",
    component: CardTerciary,
    tags: ["autodocs"],
    argTypes: {
        title: {
        control: { type: "text" },
        },
        price: {
            control: { type: "text" },
        },
        user: {
            control: { type: "text" },
        },
        local: {
            control: { type: "text" },
        },

    },
};

export const Default = {
    args: {
        title: "Guarda-chuva",
        price: "R$ 100,00",
        productImage: TemplateProduct,
        user: "Forest Gump",
        icon: MapPinIcon,
        userImage: TemplateUser,
        local: "São Paulo, SP"
    },
};
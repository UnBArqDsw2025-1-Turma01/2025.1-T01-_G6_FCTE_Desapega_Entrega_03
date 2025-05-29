import React from "react";
import CardLayout from "./layout";
import reactLogo from "./../../assets/react.svg";
import { MapPinIcon } from "@heroicons/react/24/solid";



export default {
    title: "Card/Layout",
    component: CardLayout,
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
        produtoImage: reactLogo,
        user: "Forest Gump",
        icon: MapPinIcon,
        userImage: reactLogo,
        local: "São Paulo, SP"
    },
};
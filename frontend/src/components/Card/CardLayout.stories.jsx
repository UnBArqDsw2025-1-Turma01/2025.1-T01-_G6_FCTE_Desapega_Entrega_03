import React from "react";
import CardLayout from "./layout";
import reactLogo from "./../../assets/react.svg";

export default {
    title: "Card/Layout",
    component: CardLayout,
    tags: ["autodocs"],
    argTypes: {
        title: {
        control: { type: "text" },
        },
        image: {
            control: {type: false
            },
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
        title: "titulo",
        price: "R$ 100,00",
        image: reactLogo,
        user: "Forest Gump",
        local: "São Paulo, SP"
    },
};
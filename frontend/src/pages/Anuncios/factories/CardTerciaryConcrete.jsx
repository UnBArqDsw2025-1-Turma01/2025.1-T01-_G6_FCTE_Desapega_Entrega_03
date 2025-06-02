import React from "react";
import CardTerciary from "./../../../components/Card/CardTerciary";
import CardCreator from "./CardCreator.jsx";

class CardTerciaryConcrete extends CardCreator {
    createCard(props) {
        return <CardTerciary {...props}/>;
    }
}

export default CardTerciaryConcrete;
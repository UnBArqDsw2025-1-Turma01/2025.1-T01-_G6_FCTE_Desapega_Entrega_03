import React from "react";
import CardPrimary from "./../../../components/Card/CardPrimary";
import CardCreator from "./CardCreator.jsx";

class CardPrimaryConcrete extends CardCreator{
    
    createCard(props) {
        return <CardPrimary {...props}/>;
    }
}

export default CardPrimaryConcrete;
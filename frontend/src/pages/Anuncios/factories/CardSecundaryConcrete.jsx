import React from "react";
import CardSecundary from "./../../../components/Card/CardSecundary";
import CardCreator from "./CardCreator.jsx";

class CardSecundaryConcrete extends CardCreator {
    createCard(props) {
        return <CardSecundary {...props}/>;
    }
}

export default CardSecundaryConcrete;
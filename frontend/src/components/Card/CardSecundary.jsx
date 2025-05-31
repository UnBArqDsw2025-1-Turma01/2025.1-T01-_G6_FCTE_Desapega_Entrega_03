import React from "react";
import CardLayout from "./layout";

const CardSecundary = ({
  productImage,
  price,
  title,
  user,
  userImage,
  icon,
  local,
  ...props

}) => {
  return (
        <CardLayout {...props} className="bg-red-100"
          productImage={productImage}
          price={price}
          title={title}
          user={user}
          userImage={userImage}
          icon={icon}
          local={local}
        > 
        </CardLayout>

  );
};

export default CardSecundary;

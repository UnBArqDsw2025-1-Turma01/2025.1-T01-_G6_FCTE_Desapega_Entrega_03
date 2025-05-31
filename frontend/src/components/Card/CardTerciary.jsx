import React from "react";
import CardLayout from "./layout";

const CardTerciary = ({
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
        <CardLayout {...props}
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

export default CardTerciary;

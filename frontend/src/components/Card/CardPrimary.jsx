import React from "react";
import CardLayout from "./layout";

const CardPrimary = ({
  productImage,
  price,
  title,
  user,
  userImage,
  icon,
  local
}) => {
  return (
        <CardLayout
          productImage={productImage}
          price={price}
          title={title}
          user={user}
          userImage={userImage}
          icon={icon}
          local={local}
        > <div className="flex justify-center pt-[20px]">BOTAO VAI AQUIRRRRR</div>
        </CardLayout>

  );
};

export default CardPrimary;

import React from "react";
import CardLayout from "./layout";
import TemplateProduct from "./../../assets/template_produto.png";
import TemplateUser from "./../../assets/template_user.png";
import Button from "../Layout/button";

const CardPrimary = ({
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
          productImage={TemplateProduct}
          price={price}
          title={title}
          user={user}
          userImage={TemplateUser}
          icon={icon}
          local={local}
        > 
          <div className="flex justify-center pt-[20px]">
            <Button variant="secundary" className="w-full bg-primary-700 border hover:bg-primary-800">
                Comprar
            </Button>
          </div>
        </CardLayout>

  );
};

export default CardPrimary;

import React from "react";
import CardLayout from "./layout";
import TemplateProduct from "./../../assets/template_produto.png";
import TemplateUser from "./../../assets/template_user.png";
import Button from "../Button/index";

const CardSecundary = ({
  productImage,
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
          price={false}
          title={title}
          user={user}
          userImage={TemplateUser}
          icon={icon}
          local={local}
        > 
        <div className="flex justify-center pt-[20px]">
                    <Button variant="secundary" className="w-full bg-secondary-600 border border-radius-[100px] hover:bg-secondary-700">
                        Trocar
                    </Button>
                  </div>
        </CardLayout>

  );
};

export default CardSecundary;

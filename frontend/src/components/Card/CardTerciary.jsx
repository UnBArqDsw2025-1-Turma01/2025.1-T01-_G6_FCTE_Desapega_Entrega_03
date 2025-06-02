import React from "react";
import CardLayout from "./layout";
import TemplateProduct from "./../../assets/template_produto.png";
import TemplateUser from "./../../assets/template_user.png";
import Button from "../Button/index";

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
          productImage={TemplateProduct}
          price={false}
          title={title}
          user={user}
          userImage={TemplateUser}
          icon={icon}
          local={local}
        >
          <div className="flex justify-center pt-[20px]">
            <Button variant="primary" className="w-full bg-secondary-800 border hover:bg-secondary-900">
                Doar
            </Button>
          </div>
        </CardLayout>

  );
};

export default CardTerciary;

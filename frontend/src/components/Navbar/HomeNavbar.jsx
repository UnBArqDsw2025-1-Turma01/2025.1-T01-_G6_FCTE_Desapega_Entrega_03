import React from "react";
import Button from '../Button';

const HomeNavbar = () => {
  return (
        <div className="flex gap-2">
            <Button variant="outline">login</Button>
            <Button variant="primary">cadastro</Button>
        </div>
  );
};

export default HomeNavbar;

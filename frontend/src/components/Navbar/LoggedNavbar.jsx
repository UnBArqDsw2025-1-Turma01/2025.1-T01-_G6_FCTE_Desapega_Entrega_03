import React from "react";
import UserPopover from "../Popover";
import InputFactory from "../Input/inputFactory";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const LoggedNavbar = () => {
  return (
    <>
      <InputFactory
        icon={MagnifyingGlassIcon}
        type="text" />
      <UserPopover />
    </>
  );
};

export default LoggedNavbar;

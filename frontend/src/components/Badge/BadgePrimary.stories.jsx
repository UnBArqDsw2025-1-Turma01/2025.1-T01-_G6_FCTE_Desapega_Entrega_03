import React from "react";
import BadgePrimary from "./BadgePrimary";

export default {
  title: "Badge/BadgePrimary",
  component: BadgePrimary,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: { type: "text" },
    },
    active: {
        control: { type: "boolean" },
    }
  },
};

export const Default = {
  args: {
    text: "texto",
  },
};
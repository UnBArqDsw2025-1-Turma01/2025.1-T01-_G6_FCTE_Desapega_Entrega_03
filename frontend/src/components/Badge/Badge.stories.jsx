import React from "react";
import Badge from "./layout";

export default {
  title: "Badge/Layout",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: { type: "text" },
    },
  },
};

export const Default = {
  args: {
    children: "texto",
  },
};
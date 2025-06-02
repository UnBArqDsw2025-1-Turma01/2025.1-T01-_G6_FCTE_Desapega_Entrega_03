import React from "react";
import BadgeSecondary from "./BadgeSecondary";
import { StarIcon } from "@heroicons/react/24/solid";

export default {
  title: "Badge/BadgeSecondary",
  component: BadgeSecondary,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: { type: "text" },
    },
  },
};

export const Default = {
  args: {
    text: "texto",
    icon: StarIcon
  },
};
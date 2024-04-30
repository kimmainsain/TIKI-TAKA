import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Keyboard, FinishedKeyboard } from "./Piano.keyboard";

const meta: Meta<typeof Keyboard> = {
  title: "Example/Keyboard",
  component: Keyboard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof Keyboard>;

export const White: Story = {
  args: {
    isBlack: false,
    label: "C",
  },
};

export const Black: Story = {
  args: {
    isBlack: true,
    label: "C#",
  },
};

export const Finished: Story = {
  render: FinishedKeyboard,
};

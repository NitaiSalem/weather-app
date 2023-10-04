import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button/Button";
import { ButtonSize } from "../components/Button/Button.d";
import { DegreeScale } from "../Types.d";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {},
    active: {},
    label: {},
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    size: ButtonSize.Medium,
    active: "true",
    label: DegreeScale.Celsius,
  },
};

export const Inactive: Story = {
  args: {
    active: "false",
    label: DegreeScale.Celsius,
  },
};

export const Large: Story = {
  args: {
    active: "true",
    size: ButtonSize.Large,
    label: DegreeScale.Celsius,
  },
};

export const Small: Story = {
  args: {
    active: "true",
    size: ButtonSize.Small,
    label: DegreeScale.Celsius,
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/SideWindow/SearchLocation/Input/Input";

const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InputTemplate: Story = {
  render: () => {
    return <Input hasFocus={true} />;
  },
};

export const Normal: Story = {
  args: {
    hasFocus: false,
  },
};

export const Focused: Story = {
  args: {
    hasFocus: true,
  },
};

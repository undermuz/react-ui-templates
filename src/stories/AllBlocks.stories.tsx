
import type { Meta, StoryObj } from "@storybook/react"
import { AllBlocksStory } from "./AllBlocksStory";

export default {
    title: "Example/All blocks",
    component: AllBlocksStory,
} as Meta<typeof AllBlocksStory>

type Story = StoryObj<typeof AllBlocksStory>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
  },
};
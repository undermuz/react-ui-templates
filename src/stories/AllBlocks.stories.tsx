import type { Meta, StoryObj } from "@storybook/react"
import { AllBlocksStory } from "./AllBlocksStory"

export default {
    title: "Example/All blocks",
    component: AllBlocksStory,
} as Meta<typeof AllBlocksStory>

type Story = StoryObj<typeof AllBlocksStory>

export const GrommetBlocks: Story = {
    args: { type: "grommet" },
}

export const ChakraBlocks: Story = {
    args: { type: "chakra" },
}

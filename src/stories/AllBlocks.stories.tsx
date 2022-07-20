import React from "react"

import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Box, Grommet } from "grommet"
import { FC } from "react"

import Feature1 from "../features/1/view"
import styled from "styled-components"

const UiContainer = styled(Box)`
    @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

    * {
        font-family: "Roboto", sans-serif;
    }
`

const AllBlocksStory: FC<{}> = () => {
    return (
        <Grommet>
            <UiContainer direction="column" fill>
                <Feature1 />
            </UiContainer>
        </Grommet>
    )
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AllBlocksStory> = (args) => {
    return <AllBlocksStory {...args} />
}

export const ExamplePageBuilder = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ExamplePageBuilder.args = {}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/All blocks",
    component: AllBlocksStory,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: "color" },
    // },
} as ComponentMeta<typeof AllBlocksStory>

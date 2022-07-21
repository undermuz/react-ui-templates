import React from "react"

import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Box, Grommet } from "grommet"
import { FC } from "react"

import Offer1 from "../offer/1/view"
import GridText1 from "../grid-text/1/view"
import Price1 from "../prices/1/view"
import Price2 from "../prices/2/view"
import Feature1 from "../features/1/view"
import News1 from "../news/1/view"
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
                <Offer1 />
                <GridText1 />
                <Price1 />
                <Price2 />
                <Feature1 />
                <News1 />
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

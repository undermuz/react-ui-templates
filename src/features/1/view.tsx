import { Box, Heading, Paragraph } from "grommet"

import React from "react"

import { IFeature1 } from "."
import DEF_VALUE from "./defaults"

const Feature1: React.FC<Partial<IFeature1>> = (props) => {
    const { value = DEF_VALUE } = props

    const { title = DEF_VALUE.title, subtitle = DEF_VALUE.subtitle } = value

    return (
        <Box background={{ color: "light-3" }} align="center">
            <Box width={"xxlarge"}>
                <Box
                    width={"100%"}
                    pad="medium"
                    direction="column"
                    align="center"
                >
                    <Box>
                        <Heading level={2}>{title}</Heading>
                    </Box>

                    <Box>
                        <Paragraph>{subtitle}</Paragraph>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Feature1

import { Box, Heading, Paragraph, Grid } from "grommet"

import React from "react"
import styled from "styled-components"

import { IFeature1 } from "."
import DEF_VALUE from "./defaults"

const Feature1: React.FC<Partial<IFeature1>> = (props) => {
    const { value = DEF_VALUE } = props

    const {
        title = DEF_VALUE.title,
        subtitle = DEF_VALUE.subtitle,
        description = DEF_VALUE.description,
    } = value

    return (
        <Box align="center" fill="horizontal">
            <Box width={"xlarge"}>
                <Box direction="row" gap="xlarge" pad={{ vertical: "medium" }}>
                    <Box></Box>
                    <Box direction="column" justify="center" fill="horizontal">
                        <Heading
                            color="dark-1"
                            level={2}
                            size="medium"
                            margin={{ top: "none", bottom: "medium" }}
                        >
                            {title}
                        </Heading>

                        <Paragraph
                            color="dark-2"
                            margin={{ top: "xsmall", bottom: "xsmall" }}
                            fill
                            size="medium"
                            style={{
                                lineHeight: "30px",
                            }}
                        >
                            {description}
                        </Paragraph>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Feature1

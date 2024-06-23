import { Box, Heading, Paragraph, Grid } from "grommet"

import React from "react"
import styled from "styled-components"

import { IFeature1 } from "."
import DEF_VALUE from "../defaults"

const UiImageBox = styled(Box)`
    aspect-ratio: 1;
`

const ImageBox = () => {
    return (
        <UiImageBox
            fill="horizontal"
            background={{ color: "light-3" }}
            round={"small"}
        />
    )
}

const GridBox = () => {
    return (
        <Box fill="horizontal">
            <ImageBox />
        </Box>
    )
}

const GrommetFeature1: React.FC<Partial<IFeature1>> = (props) => {
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
                    <Box
                        direction="column"
                        justify="center"
                        fill="horizontal"
                        gap={"medium"}
                    >
                        <Box
                            direction="column"
                            justify="center"
                            fill="horizontal"
                            gap={"xxsmall"}
                        >
                            <Paragraph
                                color="dark-3"
                                fill
                                size="small"
                                style={{
                                    textTransform: "uppercase",
                                }}
                            >
                                <strong>{subtitle}</strong>
                            </Paragraph>

                            <Heading color="dark-1" level={2} size="medium">
                                {title}
                            </Heading>
                        </Box>

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

                    <Grid
                        justify="center"
                        fill="horizontal"
                        rows={["1fr", "1fr"]}
                        columns={["1fr", "1fr"]}
                        gap="medium"
                    >
                        <GridBox />
                        <GridBox />
                        <GridBox />
                        <GridBox />
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default GrommetFeature1

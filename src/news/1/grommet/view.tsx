import React, { MouseEventHandler } from "react"
import styled from "styled-components"

import { Box, Heading, Paragraph, Text, Grid } from "grommet"

import { IBlog1, IBlog1Value, IBlog1ValueListItem } from "."
import DEF_VALUE from "./defaults"

const exampleButtonClick = () => {
    alert("click")
}

interface IPriceItemProps {
    data: IBlog1ValueListItem
    onButtonClick?: MouseEventHandler<HTMLDivElement>
}

const BlogItemSmall: React.FC<IPriceItemProps> = ({
    data,
    onButtonClick = exampleButtonClick,
}) => {
    const { title, date, is_active } = data

    return (
        <Box
            pad={{ horizontal: "medium", vertical: "small" }}
            // basis="fill"
            justify="end"
            margin={{ vertical: "xsmall" }}
            // fill="vertical"
            hoverIndicator={{
                background: {
                    color: "accent-1",
                },
            }}
            background={{
                color: "light-1",
                opacity: "strong",
            }}
            onClick={onButtonClick}
            round="small"
        >
            <Heading level={3} size="small" margin="none">
                {title}
            </Heading>

            <Text as={"div"} size="xsmall" margin={{ top: "xsmall" }}>
                {date}
            </Text>
        </Box>
    )
}

const BlogItemBig: React.FC<IPriceItemProps> = ({
    data,
    onButtonClick = exampleButtonClick,
}) => {
    const { title, description, date, is_active } = data

    return (
        <Box
            direction="row"
            margin={{ vertical: "xsmall" }}
            style={{
                gridRow: "1 / 3",
                // aspectRatio: is_active ? "auto" : "1.5"
            }}
            hoverIndicator={{
                background: {
                    color: "accent-1",
                },
            }}
            background={{
                color: "accent-1",
                opacity: "strong",
            }}
            onClick={onButtonClick}
            round="small"
            overflow="hidden"
            pad={"xlarge"}
        >
            <Grid width="100%" columns={["60%", "1fr"]}>
                <Box fill="vertical" background={{ color: "neutral-1" }}></Box>
                <Box
                    pad={{ horizontal: "medium", vertical: "small" }}
                    justify="between"
                >
                    <Box fill="vertical" justify="center">
                        <Heading level={3} size="small" margin="none">
                            {title}
                        </Heading>
                        <Paragraph size="small">{description}</Paragraph>
                    </Box>

                    <Text as={"div"} size="xsmall" margin={{ top: "xsmall" }}>
                        {date}
                    </Text>
                </Box>
            </Grid>
        </Box>
    )
}

const CustomGrid = styled.div`
    display: grid;
    grid-template: 1fr 1fr / 1fr 30%;
    gap: 10px;
`

const Blog1: React.FC<Partial<IBlog1>> = (props) => {
    const {
        id = 0,
        value = DEF_VALUE,
        onButtonClick = exampleButtonClick,
    } = props

    const {
        title = DEF_VALUE.title,
        subtitle = DEF_VALUE.subtitle,
        list = DEF_VALUE.list,
    } = value

    return (
        <Box background={{ color: "light-3" }} align="center" pad={"xlarge"}>
            <Box width={"xlarge"} gap={"medium"}>
                <Box direction="column" align="start" gap={"small"}>
                    <Heading level={2} margin={{ vertical: "xsmall" }}>
                        {title}
                    </Heading>

                    <Paragraph margin={{ vertical: "xsmall" }}>
                        {subtitle}
                    </Paragraph>
                </Box>

                {list.length > 0 && (
                    <Box>
                        <Grid
                            columns={["1fr", "30%"]}
                            rows={"small"}
                            gap="medium"
                        >
                            {list.map((item) =>
                                item.is_active ? (
                                    <BlogItemBig key={item.id} data={item} />
                                ) : (
                                    <BlogItemSmall key={item.id} data={item} />
                                ),
                            )}
                        </Grid>
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default Blog1

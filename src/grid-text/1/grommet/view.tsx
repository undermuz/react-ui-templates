import { Box, Grid, Heading, Paragraph, ResponsiveContext } from "grommet"
import React, { useContext } from "react"
import { IGridText } from "."
import DEF_VALUE from "../defaults"

const GridText: React.FC<Partial<IGridText>> = (props) => {
    const { id = 0, value = DEF_VALUE } = props

    const { title = "", list = [] } = value

    const size = useContext(ResponsiveContext)

    return (
        <Box pad={"xlarge"} gap={"large"}>
            <Box align="center">
                <Heading level={2}>{title}</Heading>
            </Box>

            <Grid
                columns={size !== "small" ? list.map(() => "1fr") : "100%"}
                gap="small"
                align="center"
                justify="center"
            >
                {list.map((item, index) => (
                    <Box
                        pad="medium"
                        key={index}
                        background={{ color: "light-2" }}
                        round={"small"}
                        height={"small"}
                        direction="column"
                        justify="around"
                    >
                        <Heading level={3}>{item.title}</Heading>

                        <Paragraph size="small">{item.subtitle}</Paragraph>
                    </Box>
                ))}
            </Grid>
        </Box>
    )
}

export default GridText

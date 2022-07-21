import { Box, Grid, Heading, Paragraph, ResponsiveContext } from "grommet"
import React, { useContext } from "react"
import { IGridText } from "."
import DEF_VALUE from "./defaults"

const GridText: React.FC<Partial<IGridText>> = (props) => {
    const { id = 0, value = DEF_VALUE } = props

    const { title = "", list = [] } = value

    const size = useContext(ResponsiveContext)

    return (
        <Box pad={"large"}>
            <Box align="center" pad="large">
                <h2>{title}</h2>
            </Box>

            <Box pad={"large"}>
                <Grid columns={size !== "small" ? "small" : "100%"} gap="small">
                    {list.map((item, index) => (
                        <Box
                            pad="medium"
                            key={index}
                            background={{ color: "light-2" }}
                            round={"small"}
                        >
                            <Heading level={4}>{item.title}</Heading>

                            <Paragraph size="small">{item.subtitle}</Paragraph>
                        </Box>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default GridText

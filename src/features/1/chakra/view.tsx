import React from "react"
import styled from "styled-components"

import { IFeature1 } from "."
import DEF_VALUE from "../defaults"
import {
    Box,
    Container,
    Grid,
    Heading,
    HStack,
    Text,
    VStack,
} from "@chakra-ui/react"

const UiImageBox = styled(Box)`
    aspect-ratio: 1;
`

const ImageBox = () => {
    return <UiImageBox w={"100%"} bgColor={"gray.800"} rounded={"lg"} />
}

const GridBox = () => {
    return (
        <Box w={"100%"}>
            <ImageBox />
        </Box>
    )
}

const ChakraUIFeature1: React.FC<Partial<IFeature1>> = (props) => {
    const { value = DEF_VALUE } = props

    const {
        title = DEF_VALUE.title,
        subtitle = DEF_VALUE.subtitle,
        description = DEF_VALUE.description,
    } = value

    return (
        <Container maxW="container.xl">
            <HStack spacing={100} p={6}>
                <VStack
                    justify="center"
                    w={"100%"}
                    spacing={6}
                    align={"stretch"}
                >
                    <VStack justify="center" align={"stretch"} spacing={0}>
                        <Text
                            as="strong"
                            style={{
                                textTransform: "uppercase",
                            }}
                            fontSize={"sm"}
                            color={"gray.500"}
                        >
                            {subtitle}
                        </Text>

                        <Heading as="h2">{title}</Heading>
                    </VStack>

                    <Text
                        style={{
                            lineHeight: "30px",
                        }}
                    >
                        {description}
                    </Text>
                </VStack>

                <Grid
                    w={"100%"}
                    templateRows={"1fr 1fr"}
                    templateColumns={"1fr 1fr"}
                    gap={4}
                >
                    <GridBox />
                    <GridBox />
                    <GridBox />
                    <GridBox />
                </Grid>
            </HStack>
        </Container>
    )
}

export default ChakraUIFeature1

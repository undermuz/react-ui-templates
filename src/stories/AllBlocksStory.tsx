import React from "react"

import { Box, Grommet } from "grommet"
import { FC } from "react"

import Offer1 from "../offer/1/view"
import GridText1 from "../grid-text/1/view"
import Price1 from "../prices/1/view"
import Price2 from "../prices/2/view"
import GrommetFeature1 from "../features/1/grommet/view"
import ChakraUIFeature1 from "../features/1/chakra/view"
import ChakraUIOffer2 from "../offer/2/chakra/view"
import News1 from "../news/1/view"
import styled from "styled-components"
import { ChakraProvider, VStack } from "@chakra-ui/react"

const UiContainer = styled(Box)`
    @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

    * {
        font-family: "Roboto", sans-serif;
    }
`

export const AllBlocksStory: FC<{ type: string }> = ({ type }) => {
    if (type === "grommet") {
        return (
            <Grommet>
                <ChakraProvider>
                    <UiContainer direction="column" fill>
                        <Offer1 />
                        <GridText1 />
                        <Price1 />
                        <Price2 />
                        <GrommetFeature1 />
                        <News1 />
                    </UiContainer>
                </ChakraProvider>
            </Grommet>
        )
    }

    if (type === "chakra") {
        return (
            <ChakraProvider>
                <VStack>
                    <ChakraUIOffer2 />
                    <ChakraUIFeature1 />
                </VStack>
            </ChakraProvider>
        )
    }

    return null
}

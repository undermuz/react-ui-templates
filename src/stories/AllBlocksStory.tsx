import React from 'react'

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

export const AllBlocksStory: FC<{}> = () => {
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
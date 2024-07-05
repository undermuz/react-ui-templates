import React from "react"

import { FC } from "react"
import { Box, Grommet } from "grommet"
import { ChakraProvider, VStack } from "@chakra-ui/react"

import styled from "styled-components"

import GrommetOffer1 from "../offer/1/view"
import GrommetGridText1 from "../grid-text/1/grommet/view"
import Price1 from "../prices/1/view"
import Price2 from "../prices/2/view"
import GrommetFeature1 from "../features/1/grommet/view"
import News1 from "../news/1/grommet/view"

import ChakraUIFeature1 from "../features/1/chakra/view"
import ChakraUIOffer2 from "../offer/2/chakra/view"
import ChakraUiGridText from "../grid-text/1/chakra/view"
import ChakraUiPortfolio1 from "../portfolio/1/chakra/view"
import ChakraUiStepper1 from "../stepper/1/chakra/view"

import { chakraBwTheme, ChakraBwThemeFonts } from "../themes/chakra/chakra-bw"
import DEF_VALUE from "../offer/2/defaults"

const UiContainer = styled(Box)`
    @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
`

export const AllBlocksStory: FC<{ type: string }> = ({ type }) => {
    if (type === "grommet") {
        return (
            <Grommet>
                <UiContainer direction="column" fill>
                    <GrommetOffer1 />
                    <GrommetGridText1 />
                    <Price1 />
                    <Price2 />
                    <GrommetFeature1 />
                    <News1 />
                </UiContainer>
            </Grommet>
        )
    }

    if (type === "chakra") {
        return (
            <ChakraProvider theme={chakraBwTheme}>
                <ChakraBwThemeFonts />
                <VStack bgColor={"block.bg"} spacing={0}>
                    <ChakraUIOffer2
                        value={{
                            ...DEF_VALUE,
                            title: "Product-дизайнер",
                            subtitle:
                                "Занимаюсь дизайном веб-сервисов, порталов, интернет-магазинов и мобильных приложений.  А так же создаю сайты на Tilda",
                            show_button: false,
                        }}
                    />
                    <ChakraUiGridText
                        value={{
                            title: "Услуги",
                            list: [
                                {
                                    title: "Дизайн",
                                    subtitle:
                                        "Дизайн и проектирование Сервисов, CRM, дашбордов, порталов, интернет-магазинов  и приложений",
                                },
                                {
                                    title: "Tilda",
                                    subtitle:
                                        "Дизайн и сборка многостраничных сайтов и интернет-магазинов ",
                                },
                                {
                                    title: "Дизайн и разработка под ключ в компании bolt-system",
                                    subtitle:
                                        "Автоматизация бизнес-процессов и создание веб-продуктов под ключ  для малого и среднего бизнеса",
                                },
                            ],
                        }}
                    />
                    <ChakraUiStepper1 />
                    <ChakraUiPortfolio1 />
                    <ChakraUIFeature1 />
                </VStack>
            </ChakraProvider>
        )
    }

    return null
}

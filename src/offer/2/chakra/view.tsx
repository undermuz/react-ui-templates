import { FC } from "react"

import DEF_VALUE from "../defaults"
import { IOfferBlock } from "."
import {
    Box,
    Button,
    Container,
    Grid,
    Heading,
    HStack,
    Text,
    VStack,
} from "@chakra-ui/react"

const exampleButtonClick = () => {
    alert("click")
}

const ChakraUIOffer2: FC<Partial<IOfferBlock>> = (props) => {
    const { value = DEF_VALUE, onButtonClick = exampleButtonClick } = props

    const {
        title = DEF_VALUE.title,
        subtitle = DEF_VALUE.subtitle,
        show_button = DEF_VALUE.show_button,
        button_text = DEF_VALUE.button_text,
        show_adv = DEF_VALUE.show_adv,
        advantage = DEF_VALUE.advantage,
    } = value

    return (
        <Container maxW="container.xl">
            <Box
                rounded={30}
                boxShadow={"md"}
                p={10}
                bgColor={"gray.900"}
                color={"gray.100"}
            >
                <Grid templateColumns="6fr 3fr" gap={20}>
                    <VStack align={"stretch"} spacing={6}>
                        <Heading>{title}</Heading>

                        <Text>{subtitle}</Text>

                        {show_adv && advantage.length > 0 && (
                            <HStack spacing={8}>
                                {advantage.map((item, index) => (
                                    <VStack align={"stretch"} key={index}>
                                        <Text fontSize={"xs"}>
                                            {item.subtitle}
                                        </Text>
                                        <Text as={"strong"}>{item.title}</Text>
                                    </VStack>
                                ))}
                            </HStack>
                        )}

                        {show_button && (
                            <Box>
                                <Button size="lg" onClick={onButtonClick}>
                                    {button_text}
                                </Button>
                            </Box>
                        )}
                    </VStack>

                    <Box>
                        <Box
                            bgColor={"gray.100"}
                            sx={{ aspectRatio: "1" }}
                            rounded={30}
                        />
                    </Box>
                </Grid>
            </Box>
        </Container>
    )
}

export default ChakraUIOffer2

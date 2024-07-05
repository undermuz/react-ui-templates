import { FC } from "react"

import { Box, Button, Heading, Paragraph } from "grommet"
import DEF_VALUE from "./defaults"
import { IOfferBlock } from "."

const exampleButtonClick = () => {
    alert("click")
}

const GrommetOffer1: FC<Partial<IOfferBlock>> = (props) => {
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
        <Box background={{ color: "neutral-2", opacity: true }}>
            <Box pad="xlarge" align="center" gap={"medium"}>
                <Heading>{title}</Heading>

                <Paragraph>{subtitle}</Paragraph>

                {show_button && (
                    <Box>
                        <Button
                            primary
                            size="large"
                            onClick={onButtonClick}
                            label={button_text}
                        />
                    </Box>
                )}
            </Box>

            {show_adv && advantage.length > 0 && (
                <Box pad="medium" background={{ color: "neutral-2" }}>
                    <Box direction="row" justify="around">
                        {advantage.map((item, index) => (
                            <Box key={index}>
                                <img src={item.image} alt="" />

                                <strong>{item.title}</strong>
                            </Box>
                        ))}
                    </Box>
                </Box>
            )}
        </Box>
    )
}

export default GrommetOffer1

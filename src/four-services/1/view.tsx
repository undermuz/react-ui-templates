import { Box, Heading } from "grommet"
import { FC } from "react"

import { IFourServices, IFourServicesValueServices } from "."
import DEF_VALUE from "./defaults"

const FourServices: FC<Partial<IFourServices>> = (props) => {
    const { id = 0, value = DEF_VALUE } = props

    const { main = DEF_VALUE.main, services = DEF_VALUE.services } = value

    const { title = "" } = main

    return (
        <Box id={`block-${id}`}>
            <Box width="large">
                <Box>
                    <Heading level={2}>{title}</Heading>
                </Box>

                <Box>
                    {Object.keys(services).map((key) => {
                        const item =
                            services[key as keyof IFourServicesValueServices]

                        return (
                            <div key={key} className="block">
                                <Heading level={3}>{item.description}</Heading>

                                <Box>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: item.text,
                                        }}
                                    />
                                </Box>
                            </div>
                        )
                    })}
                    ,
                </Box>
            </Box>
        </Box>
    )
}

export default FourServices

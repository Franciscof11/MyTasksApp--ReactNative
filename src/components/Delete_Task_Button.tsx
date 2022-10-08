import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const Delete_Task_Button = (props: SvgProps) => (
    <Svg
        {...props}
        height={24}
        width={24}
        fill="#FFF"
        style={{
            marginRight: 5,
        }}
    >
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    </Svg>
)

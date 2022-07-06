import { View } from "react-native"
import { colors } from "../../theme"


interface DividerProps {
    height?: number
    color?: string
}

export const Divider = (props: DividerProps) => {

    const { height = 2, color = colors.muted[200] } = props

    return (
        <View style={{ height, backgroundColor: color }} />
    )
}
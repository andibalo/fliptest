import { ActivityIndicator, View, StyleSheet } from "react-native"
import { colors } from "../../theme"


interface SpinnerProps {
    show: boolean
    color?: string
}

export const Spinner = (props: SpinnerProps) => {

    const { show, color = colors.brand[200] } = props

    return (
        <View style={styles.spinnerContainer}>
            <ActivityIndicator animating={show} color={color} size="large" />
        </View>
    )
}

const styles = StyleSheet.create({
    spinnerContainer: {
        alignItems: "center",
        marginVertical: 12
    }
})
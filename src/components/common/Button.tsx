import { Pressable, Text, StyleSheet, View } from "react-native"
import { colors } from "../../theme"


interface ButtonProps {
    onPress: () => void
    text: string
}

export const Button = (props: ButtonProps) => {

    const { onPress, text } = props

    return (
        <Pressable style={styles.btnContainer} onPress={onPress}>
            <Text style={styles.btnText}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: colors.brand[100],
        paddingHorizontal: 4,
        paddingVertical: 8,
        borderRadius: 8,
    },
    btnText: {
        alignSelf: "center",
        color: colors.white[100]
    }
})
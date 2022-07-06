import { Pressable, Text, StyleSheet, View } from "react-native"
import { colors } from "../../theme"

export type ButtonVariants = "primary" | "transparent" | "secondary"

interface ButtonProps {
    onPress: () => void
    text: string,
    variant?: ButtonVariants
}

export const Button = (props: ButtonProps) => {

    const { onPress, text, variant = "primary" } = props

    if (variant === "transparent") {
        return (
            <Pressable style={[styles.btnContainer, styles.btnTransparent]} onPress={onPress}>
                <Text style={[styles.btnText, styles.btnTextTransparent]}>{text}</Text>
            </Pressable>
        )
    }

    if (variant === "secondary") {
        return (
            <Pressable style={[styles.btnContainer, styles.btnSecondary]} onPress={onPress}>
                <Text style={[styles.btnText, styles.btnTextSecondary]}>{text}</Text>
            </Pressable>
        )
    }

    return (
        <Pressable style={styles.btnContainer} onPress={onPress}>
            <Text style={styles.btnText}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.brand[100],
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
    },
    btnSecondary: {
        backgroundColor: colors.white[100],
        borderColor: colors.brand[200],
        borderWidth: 2,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    btnTransparent: {
        backgroundColor: "transparent",
    },
    btnText: {
        color: colors.white[100]
    },
    btnTextSecondary: {
        color: colors.black[100]
    },
    btnTextTransparent: {
        color: colors.brand[200]
    },
})
import { Pressable, Text, StyleSheet, View } from "react-native"
import { colors } from "../../theme"
import { Feather } from '@expo/vector-icons';

export type ButtonVariants = "primary" | "transparent" | "secondary"

interface ButtonProps {
    onPress: () => void
    text: string,
    variant?: ButtonVariants,
    iconRight?: keyof typeof Feather.glyphMap
}

export const Button = (props: ButtonProps) => {

    const { onPress, text, variant = "primary", iconRight } = props

    if (variant === "transparent") {
        return (
            <Pressable style={[styles.btnContainer, styles.btnTransparent]} onPress={onPress}>
                <View style={styles.btnInner}>
                    <Text style={[styles.btnText, styles.btnTextTransparent]}>{text}</Text>
                    {
                        iconRight && <Feather name={iconRight} size={24} color={colors.brand[200]} />
                    }
                </View>
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
    btnInner: {
        flexDirection: "row",
        alignItems: "center"
    },
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
        color: colors.white[100],
        fontWeight: "700"
    },
    btnTextSecondary: {
        color: colors.black[100]
    },
    btnTextTransparent: {
        color: colors.brand[200]
    },
})
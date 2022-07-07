import { StyleSheet, Text, View } from "react-native"
import { Button } from "./Button"


interface ErrorMessageProps {
    onRetry: () => void
    message?: string,
}

export const ErrorMessage = (props: ErrorMessageProps) => {

    const { message = "Something went wrong", onRetry } = props

    return (
        <View style={styles.errorContainer}>
            <View>
                <Text style={styles.errorText}>{message}</Text>
                <Button onPress={onRetry} text="Retry" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    errorContainer: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    },
    errorText: {
        marginBottom: 15
    }
})
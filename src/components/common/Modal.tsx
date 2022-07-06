import { ReactNode } from "react"
import { StyleSheet, View, Modal as RNModal, Pressable } from "react-native"


interface ModalProps {
    isVisible: boolean,
    modalContent: ReactNode
    onBackgroundPress?: () => void
}

export const Modal = (props: ModalProps) => {

    const { isVisible, modalContent, onBackgroundPress } = props
    return (
        <RNModal transparent visible={isVisible} animationType="fade">
            <Pressable onPress={onBackgroundPress} style={styles.modalBackground}>
                <View
                    style={styles.modalContainer}>
                    {modalContent}
                </View>
            </Pressable>
        </RNModal>
    )
}


const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
});
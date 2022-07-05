import { View, StyleSheet, Text } from 'react-native'
import { colors } from '../theme'
import { Button } from './common'
import { AntDesign } from '@expo/vector-icons';

export const CardItem = () => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardColorIndicator} />
            <View>
                <View style={styles.bankInfoContainer}>
                    <Text>Permata</Text>
                    <AntDesign name="arrowright" size={16} color="black" />
                    <Text>Permata</Text>
                </View>
                <Text>Andi Balo</Text>
                <Text>RP 10.0.000</Text>
            </View>
            <View>
                <Button onPress={() => null} text="test" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginVertical: 20,
        width: "80%",
        position: "relative",
        borderRadius: 5,
        backgroundColor: colors.white[100],
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        justifyContent: "space-between",
        overflow: "hidden"
    },
    cardColorIndicator: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        width: "3%",
        backgroundColor: colors.brand[100]
    },
    bankInfoContainer:{
        flexDirection: "row",
        alignItems: "center"
    }
})
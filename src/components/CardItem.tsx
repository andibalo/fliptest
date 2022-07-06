import { View, StyleSheet, Text, Pressable } from 'react-native'
import { colors } from '../theme'
import { Button, ButtonVariants } from './common'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { convertToRupiah } from '../utils/functions';
import { TRANSACTION_SUCCESS, TRANSACTION_PENDING } from '../utils/constants';
import { formatDateToDDMMYYY } from '../utils/dates'
import { TransactionInfo } from '../services';

interface CardItemProps {
    onPress: (transactionInfo: TransactionInfo) => void,
    transactionInfo: TransactionInfo
}

interface MapStatusToBtnVariant {
    [status: string]: ButtonVariants
}
interface StatusMapper {
    [status: string]: string 
}

const mapStatusToBtnVariant: MapStatusToBtnVariant = {
    [TRANSACTION_PENDING]: "secondary",
    [TRANSACTION_SUCCESS]: "primary"
}

const mapStatusToText: StatusMapper = {
    [TRANSACTION_PENDING]: "Pengecekan",
    [TRANSACTION_SUCCESS]: "Berhasil"
}

const mapStatusToColor: StatusMapper = {
    [TRANSACTION_PENDING]: colors.brand[200],
    [TRANSACTION_SUCCESS]: colors.brand[100]
}

export const CardItem = (props: CardItemProps) => {

    const {onPress, transactionInfo } = props

    return (
        <Pressable onPress={() => onPress(transactionInfo)} style={styles.cardContainer}>
            <View style={{...styles.cardColorIndicator, backgroundColor: mapStatusToColor[transactionInfo.status]}} />
            <View>
                <View style={styles.bankInfoContainer}>
                    <Text>{transactionInfo.senderBank}</Text>
                    <AntDesign style={styles.iconSpacer} name="arrowright" size={16} color="black" />
                    <Text>{transactionInfo.beneficiaryBank}</Text>
                </View>
                <Text>{transactionInfo.beneficiaryName}</Text>
                <View style={styles.bankInfoContainer}>
                    <Text>Rp{convertToRupiah(String(transactionInfo.amount))}</Text>
                    <MaterialIcons style={styles.iconSpacer} name="circle" size={8} color="black" />
                    <Text>{formatDateToDDMMYYY(transactionInfo.createdAt)}</Text>
                </View>
            </View>
            <View>
                <Button onPress={() => null} variant={mapStatusToBtnVariant[transactionInfo.status]} text={mapStatusToText[transactionInfo.status]} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconSpacer: {
        marginHorizontal: 4
    },
    cardContainer: {
        marginBottom: 10,
        position: "relative",
        borderRadius: 5,
        backgroundColor: colors.white[100],
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 15,
        justifyContent: "space-between",
        overflow: "hidden"
    },
    cardColorIndicator: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        width: "3%",
        backgroundColor: colors.brand[100],
    },
    bankInfoContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
})
import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TransactionInfo } from '../services';
import { colors } from '../theme';
import { formatDateToDDMMYYY } from '../utils/dates';
import { convertToRupiah } from '../utils/functions';
import { Divider } from '../components/common';


export const TransactionDetailsScreen = () => {

    const route = useRoute();

    const transactionInfo: TransactionInfo = route.params || {}

    return (
        <View>
            <View style={styles.container}>
                <Text>ID TRANSAKSI:#{transactionInfo.id}</Text>
            </View>
            <Divider color={colors.muted[100]}/>
            <View style={[styles.container, styles.infoRow]}>
                <Text>Detail Transaksi</Text>
                <Text>Tutup</Text>
            </View>
            <Divider/>
            <View style={styles.container}>
                <View style={styles.bankInfoContainer}>
                    <Text>{transactionInfo.senderBank}</Text>
                    <AntDesign style={styles.iconSpacer} name="arrowright" size={16} color="black" />
                    <Text>{transactionInfo.beneficiaryBank}</Text>
                </View>
                <View style={[styles.infoRow, styles.infoRowDetail]}>
                    <View style={styles.infoCol}>
                        <Text>{transactionInfo.beneficiaryName}</Text>
                        <Text>{transactionInfo.accountNumber}</Text>
                    </View>
                    <View style={[styles.infoCol,styles.infoRightCol]}>
                        <Text>Nominal</Text>
                        <Text>Rp{convertToRupiah(String(transactionInfo.amount))}</Text>
                    </View>
                </View>
                <View style={[styles.infoRow, styles.infoRowDetail]}>
                    <View style={styles.infoCol}>
                        <Text>Berita Transfer</Text>
                        <Text>{transactionInfo.remark}</Text>
                    </View>
                    <View style={[styles.infoCol,styles.infoRightCol]}>
                        <Text>Kode Unik</Text>
                        <Text>{transactionInfo.uniqueCode}</Text>
                    </View>
                </View>
                <View style={[styles.infoRow]}>
                    <View style={styles.infoCol}>
                        <Text>Waktu Dibuat</Text>
                        <Text>{formatDateToDDMMYYY(transactionInfo.createdAt)}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    iconSpacer: {
        marginHorizontal: 4
    },
    bankInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8
    },
    container: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: colors.white[100]
    },
    infoRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    infoCol: {
       flex: 0.6
    },
    infoRightCol: {
        flex: 0.4
    },
    infoRowDetail: {
        marginBottom: 20
    }
})
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TransactionInfo } from '../services';
import { colors, fontStyles } from '../theme';
import { formatDateToDDMMYYY } from '../utils/dates';
import { convertToRupiah } from '../utils/functions';
import { Button, Divider } from '../components/common';
import { MaterialIcons } from '@expo/vector-icons';

export const TransactionDetailsScreen = () => {

    const navigation = useNavigation()
    const route = useRoute();

    const transactionInfo: TransactionInfo = route.params || {}

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.idRow}>
                    <Text style={[fontStyles.bold]} >ID TRANSAKSI:#{transactionInfo.id}</Text>
                    <MaterialIcons style={styles.icon} name="content-copy" size={18} color={colors.brand[200]} />
                </View>
            </View>
            <Divider color={colors.muted[100]} />
            <View style={[styles.container, styles.infoRow]}>
                <Text style={[fontStyles.bold]}>Detail Transaksi</Text>
                <Button text='Tutup' variant='transparent' onPress={() => navigation.goBack()} />
            </View>
            <Divider />
            <View style={styles.container}>
                <View style={styles.bankInfoContainer}>
                    <Text style={[fontStyles.bold, fontStyles.heading2, fontStyles.uppercase]}>{transactionInfo.senderBank}</Text>
                    <AntDesign style={styles.iconSpacer} name="arrowright" size={22} color="black" />
                    <Text style={[fontStyles.bold, fontStyles.heading2, fontStyles.uppercase]}>{transactionInfo.beneficiaryBank}</Text>
                </View>
                <View style={[styles.infoRow, styles.infoRowDetail]}>
                    <View style={styles.infoCol}>
                        <Text style={[fontStyles.bold, fontStyles.uppercase]}>{transactionInfo.beneficiaryName}</Text>
                        <Text>{transactionInfo.accountNumber}</Text>
                    </View>
                    <View style={[styles.infoCol, styles.infoRightCol]}>
                        <Text style={[fontStyles.bold, fontStyles.uppercase]}>Nominal</Text>
                        <Text>Rp{convertToRupiah(String(transactionInfo.amount))}</Text>
                    </View>
                </View>
                <View style={[styles.infoRow, styles.infoRowDetail]}>
                    <View style={styles.infoCol}>
                        <Text style={[fontStyles.bold, fontStyles.uppercase]}>Berita Transfer</Text>
                        <Text>{transactionInfo.remark}</Text>
                    </View>
                    <View style={[styles.infoCol, styles.infoRightCol]}>
                        <Text style={[fontStyles.bold, fontStyles.uppercase]}>Kode Unik</Text>
                        <Text>{transactionInfo.uniqueCode}</Text>
                    </View>
                </View>
                <View style={[styles.infoRow]}>
                    <View style={styles.infoCol}>
                        <Text style={[fontStyles.bold, fontStyles.uppercase]}>Waktu Dibuat</Text>
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
    idRow: {
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        marginLeft: 8
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
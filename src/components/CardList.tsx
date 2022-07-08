import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet } from "react-native";
import { TransactionInfo } from "../services";
import { CardItem } from "./CardItem";

interface CardListProps {
    data: TransactionInfo[],
    refetch: () => void,
    isRefetching: boolean
}

export const CardList = (props: CardListProps) => {

    const navigation = useNavigation()

    const { data, refetch, isRefetching } = props

    const onCardPress = (transactionInfo: TransactionInfo) => {
        navigation.navigate("TransactionDetails", transactionInfo)
    }

    const renderTransactionItem = ({ item }: { item: TransactionInfo }) => {
        return (
            <CardItem
                onPress={onCardPress}
                transactionInfo={item}
            />
        );
    }


    return (
        <FlatList
            onRefresh={refetch}
            refreshing={isRefetching}
            data={data}
            renderItem={renderTransactionItem}
            keyExtractor={(item, index) => `transaction-${item.id}-${index}`}
            contentContainerStyle={styles.listContainer}
        />
    )

}

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 8,
        paddingTop: 5,
        paddingBottom: 15
    }
})
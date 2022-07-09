import { useNavigation } from "@react-navigation/native";
import { memo } from "react";
import { FlatList, StyleSheet } from "react-native";
import { TransactionInfo } from "../services";
import { CardItem } from "./CardItem";

interface CardListProps {
    data: TransactionInfo[],
    refetch: () => void,
    isRefetching: boolean
}

const UnMemoizedCardList = (props: CardListProps) => {

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

export const CardList = memo(UnMemoizedCardList, (prevProps, nextProps) => {

    return JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data)
})


const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 8,
        paddingTop: 5,
        paddingBottom: 15
    }
})
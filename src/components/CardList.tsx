import { FlatList } from "react-native";
import { TransactionInfo } from "../services";
import { CardItem } from "./CardItem";

interface CardListProps {
    data: TransactionInfo[] | undefined
}

export const CardList = (props: CardListProps) => {

    const { data } = props

    const renderTransactionItem = ({ item }: { item: TransactionInfo }) => {
        return (
            <CardItem
                senderBank={item.senderBank}
                beneficiaryBank={item.beneficiaryBank}
                beneficiaryName={item.beneficiaryName}
                amount={item.amount}
                createdAt={item.createdAat}
                status={item.status} />
        );
    }


    return (
        <FlatList
            data={data}
            renderItem={renderTransactionItem}
            keyExtractor={(item, index) => `transaction-${item.id}-${index}`}
        />
    )

}
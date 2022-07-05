import { View } from 'react-native';
import { CardList } from '../components/CardList';
import { Spinner } from '../components/common/Spinner';
import { useFetchTransaction } from '../services';



export const TransactionScreen = () => {
    const { isLoading, data, refetch, isRefetching } = useFetchTransaction()

    if (isLoading) {
        return <Spinner show={isLoading} />
    }

    return (
        <View>
            <CardList data={data} />
        </View>
    )
}
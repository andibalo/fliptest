import { StyleSheet, View } from 'react-native';
import { CardList } from '../components/CardList';
import { Spinner } from '../components/common/Spinner';
import { SearchBar } from '../components/SearchBar';
import { useFetchTransaction } from '../services';

export const TransactionScreen = () => {
    const { isLoading, data, refetch, isRefetching } = useFetchTransaction()

    if (isLoading) {
        return <Spinner show={isLoading} />
    }

    return (
        <View>
            <View style={styles.searchBarContainer}>
                <SearchBar />
            </View>
            <CardList data={data} />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBarContainer : {
        paddingHorizontal: 8,
        marginTop: 10,
        marginBottom: 5
    }
})
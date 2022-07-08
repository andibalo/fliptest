import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CardList } from '../components/CardList';
import { ErrorMessage } from '../components/common';
import { Spinner } from '../components/common/Spinner';
import { SearchBar } from '../components/SearchBar';
import { TransactionInfo, useFetchTransaction } from '../services';
import { TRANSACTION_SEARCH_KEYS } from '../utils/constants';

export const TransactionScreen = () => {
    const [searchResults, setSearchResults] = useState<TransactionInfo[]>([])
    const { isError, isLoading, data = [], refetch, isRefetching } = useFetchTransaction()

    const searchOptions = {
        keys: TRANSACTION_SEARCH_KEYS
    }

    if (isLoading) {
        return <Spinner show={isLoading} />
    }

    if (isError) {
        return <ErrorMessage onRetry={refetch} />
    }

    return (
        <View style={styles.screenContainer}>
            <View style={styles.searchBarContainer}>
                <SearchBar data={data} searchOptions={searchOptions} setSearchResult={setSearchResults} />
            </View>
            <CardList data={searchResults.length > 0 ? searchResults : data} refetch={refetch} isRefetching={isRefetching} />
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1
    },
    searchBarContainer: {
        paddingHorizontal: 8,
        marginTop: 10,
        marginBottom: 5
    }
})
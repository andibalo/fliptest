import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CardList } from '../components/CardList';
import { ErrorMessage, RadioButtonOption } from '../components/common';
import { Spinner } from '../components/common/Spinner';
import { SearchBar } from '../components/SearchBar';
import { TransactionInfo, useFetchTransaction } from '../services';
import { defaultSortOption, TRANSACTION_SEARCH_KEYS } from '../utils/constants';

export const TransactionScreen = () => {
    const [searchResults, setSearchResults] = useState<TransactionInfo[]>([])
    const [sortOption, setSortOption] = useState<RadioButtonOption>(defaultSortOption);

    const { isError, isLoading, data = [], refetch, isRefetching } = useFetchTransaction()

    const searchOptions = {
        keys: TRANSACTION_SEARCH_KEYS
    }

    const onRefresh = () => {
        refetch()
        setSearchResults([])
        setSortOption(defaultSortOption)
    }

    if (isLoading) {
        return <Spinner show={isLoading} />
    }

    if (isError) {
        return <ErrorMessage onRetry={onRefresh} />
    }

    return (
        <View style={styles.screenContainer}>
            <View style={styles.searchBarContainer}>
                <SearchBar
                    sortOption={sortOption}
                    setSortOption={setSortOption}
                    searchResults={searchResults}
                    data={data}
                    searchOptions={searchOptions}
                    setSearchResult={setSearchResults} />
            </View>
            <CardList data={searchResults.length > 0 ? searchResults : data} refetch={onRefresh} isRefetching={isRefetching} />
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
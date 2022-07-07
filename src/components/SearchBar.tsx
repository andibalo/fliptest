import { StyleSheet, TextInput, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import Fuse from "fuse.js";
import { colors } from "../theme";
import { TransactionInfo } from "../services";
import { useState } from "react";

interface SearchBarProps {
    data: TransactionInfo[],
    setSearchResult: (result: any) => void;
    searchOptions: Fuse.IFuseOptions<any>
}

export const SearchBar = (props: SearchBarProps) => {
    const [input, setInput] = useState<string>("")

    const { data, searchOptions, setSearchResult } = props

    const fuse = new Fuse(data, searchOptions)

    const onSearch = () => {
        const results = fuse.search(input)
        
        if (results.length <= 0) {
            setSearchResult([])
            return 
        }

        setSearchResult(results.map(result => result.item))
    }

    const onChange = (text: string) => {

        setInput(text)
    }

    return (
        <View style={styles.searchSection}>
            <View style={styles.iconContainer}>
                <AntDesign name="search1" size={20} color="black" style={styles.searchIcon} />
            </View>
            <TextInput
                style={styles.input}
                placeholder="Cari nama, bank, atau nominal"
                value={input}
                onChangeText={onChange}
                onSubmitEditing={onSearch}
            />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        searchSection: {
            flexDirection: 'row',
            backgroundColor: colors.white[100],
            borderRadius: 5,
            overflow: "hidden"
        },
        iconContainer: {
            flex: 0.1,
            alignItems: "center",
            justifyContent: "center"
        },
        searchIcon: {
            padding: 10,
        },
        input: {
            flex: 0.9,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            backgroundColor: colors.white[100],
            color: colors.black[100],
        },
    }
)
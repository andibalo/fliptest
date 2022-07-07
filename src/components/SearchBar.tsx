import { StyleSheet, Text, TextInput, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import Fuse from "fuse.js";
import { colors } from "../theme";
import { TransactionInfo } from "../services";
import { useState } from "react";
import { Button } from "./common";
import { useModal } from "../hooks";
import { SortOptions } from "./SortOptions";

interface SearchBarProps {
    data: TransactionInfo[],
    setSearchResult: (result: any) => void;
    searchOptions: Fuse.IFuseOptions<any>
}

export const SearchBar = (props: SearchBarProps) => {

    const { handleModal } = useModal()

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
            <View style={styles.btnContainer}>
                <Button onPress={() => handleModal(<SortOptions/>)} variant="transparent" text="Urutkan" iconRight="chevron-down" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        btnContainer: {
            flex: 0.3,
        },
        searchSection: {
            alignItems: "center",
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
            flex: 0.6,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            backgroundColor: colors.white[100],
            color: colors.black[100],
        },
    }
)
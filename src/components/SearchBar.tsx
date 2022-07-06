import { StyleSheet, TextInput, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { colors } from "../theme";

export const SearchBar = () => {

    return (
        <View style={styles.searchSection}>
            <View style={styles.iconContainer}>
                <AntDesign name="search1" size={20} color="black" style={styles.searchIcon} />
            </View>
            <TextInput
                style={styles.input}
                placeholder="Cari nama, bank, atau nominal"
                onChangeText={(searchString) => null}
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
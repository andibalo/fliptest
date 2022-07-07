import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors } from '../../theme';
import { MaterialIcons } from '@expo/vector-icons';

interface RadioButtonProps {
    data: any,
    onSelect: (data: any) => void
}

export const RadioButton = (props: RadioButtonProps) => {
    const { data, onSelect } = props

    const [userOption, setUserOption] = useState(null);

    const selectHandler = (value: any) => {
        onSelect(value);
        setUserOption(value);
    };

    return (
        <View>
            {data.map((item: any, index: number) => {
                return (
                    <Pressable
                        key={item.value + index}
                        onPress={() => selectHandler(item.value)}
                    >
                        <View style={styles.optionRow}>
                            <MaterialIcons name={item.value === userOption ? "radio-button-on" : "radio-button-off"} size={24} color={colors.brand[200]} />
                            <Text style={styles.option}> {item.value}</Text>
                        </View>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    option: {
        color: colors.black[100],
        marginLeft: 5
    },
    optionRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },
});
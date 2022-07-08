import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors } from '../../theme';
import { MaterialIcons } from '@expo/vector-icons';

export interface RadioButtonOptions {
    id: string
    label: string
    value: string
}
interface RadioButtonProps {
    options: RadioButtonOptions[]
    onSelect: (data: any) => void
    selected: string
}

export const RadioButton = (props: RadioButtonProps) => {

    const { options, onSelect, selected } = props

    return (
        <View>
            {options.map((item: any, index: number) => {
                return (
                    <Pressable
                        key={item.value + index}
                        onPress={() => onSelect(item.value)}
                    >
                        <View style={styles.optionRow}>
                            <MaterialIcons name={item.value === selected ? "radio-button-on" : "radio-button-off"} size={24} color={colors.brand[200]} />
                            <Text style={styles.option}> {item.label}</Text>
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
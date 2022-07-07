import { View } from "react-native";
import { RadioButton } from "./common";


const radioButtonsData = [
    {
        id: '1',
        label: 'Apple',
        value: 'apple',
    },
    {
        id: '2',
        label: 'Samsung',
        value: 'samsung',
    },
];

export const SortOptions = () => {


    return (
        <View>
            <RadioButton data={radioButtonsData} onSelect={() => null} />
        </View>
    )
}
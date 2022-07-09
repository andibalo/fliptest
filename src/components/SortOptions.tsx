import { View } from "react-native";
import { RadioButton, RadioButtonOption } from "./common";

const radioButtonsData: RadioButtonOption[] = [
    {
        id: '1',
        label: 'URUTKAN',
        value: '',
    },
    {
        id: '2',
        label: 'Nama A-Z',
        value: 'atoz',
    },
    {
        id: '3',
        label: 'Nama Z-A',
        value: 'ztoa',
    },
    {
        id: '4',
        label: 'Tanggal Terbaru',
        value: 'newest',
    },
    {
        id: '5',
        label: 'Tanggal Terlama',
        value: 'oldest',
    },
];

interface SortOptionsProps {
    onSortOptionClick: (option: RadioButtonOption) => void
    chosenOption: RadioButtonOption
}

export const SortOptions = (props: SortOptionsProps) => {

    const { chosenOption, onSortOptionClick } = props

    return (
        <View>
            <RadioButton selected={chosenOption} options={radioButtonsData} onSelect={onSortOptionClick} />
        </View>
    )
}
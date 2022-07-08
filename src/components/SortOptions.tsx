import { View } from "react-native";
import { RadioButton } from "./common";

const radioButtonsData = [
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
    onSortOptionClick : (option: string) => void
    chosenOption: string
}

export const SortOptions = (props: SortOptionsProps) => {

    const { chosenOption, onSortOptionClick } = props

    return (
        <View>
            <RadioButton selected={chosenOption} options={radioButtonsData} onSelect={onSortOptionClick} />
        </View>
    )
}
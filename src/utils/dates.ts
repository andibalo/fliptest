const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const formatDateToDDMMYYY = (datestring: string) => {
    const date = new Date(datestring.split(" ")[0])

    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

export function compareDates(order = 'desc') {

    return function innerSort(a, b) {

        const datetimeA = new Date(a.createdAt.split(" ")[0])
        const datetimeB = new Date(b.createdAt.split(" ")[0])

        if (order === 'asc') {
            return Number(datetimeA) - Number(datetimeB)
        }

        return Number(datetimeB) - Number(datetimeA)
    };
}
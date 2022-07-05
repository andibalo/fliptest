const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const formatDateToDDMMYYY = (datestring : string) => {
    const date = new Date(datestring.split(" ")[0])
 
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}
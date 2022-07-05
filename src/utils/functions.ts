export const convertToRupiah = (angka: string): string => {
    var rupiah = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
    return rupiah.split('', rupiah.length - 1).reverse().join('');
}

export const formatDateToDDMMYYY = (datestring : string) => {
    const date = new Date(datestring.split(" ")[0])
 
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}
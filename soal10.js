function hitungKembalian(totalPembayaran, totalBelanja) {
    let kembalian = totalPembayaran - totalBelanja;
    let pecahan = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    let hasil = {};

    for (let i = 0; i < pecahan.length; i++) {
        let uang = pecahan[i];

        if (kembalian >= uang) {
            let jumlah = parseInt(kembalian / uang); 
            hasil[uang] = jumlah;
            kembalian = kembalian % uang;
        }
    }

    return hasil;
}

console.log(hitungKembalian(10000, 7500));  
console.log(hitungKembalian(5000, 1100));   
console.log(hitungKembalian(178000, 90500)); 

const daftarProduk = [
    { nama: "TV", kategori: "elektronik" },
    { nama: "headphone", kategori: "elektronik" },
    { nama: "baju", kategori: "fashion" },
    { nama: "gitar", kategori: "musik" },
    { nama: "sepatu", kategori: "olahraga" },
    { nama: "kamera", kategori: "elektronik" }
];

const rekomendasiProduk = (minat, produk) => {
    let hasil = [];

    for (let i = 0; i < produk.length; i++) {
        let item = produk[i];

        for (let j = 0; j < minat.length; j++) {
            if (item.kategori === minat[j]) {
                let indexBaru = hasil.length;
                hasil[indexBaru] = item.nama;
                break; 
            }
        }
    }

    return hasil;
}


const minatRina = ["elektronik", "musik"];
console.log(rekomendasiProduk(minatRina, daftarProduk));
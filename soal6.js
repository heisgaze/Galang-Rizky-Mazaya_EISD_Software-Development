const menu = {
    "Ayam Goreng Krispi":{harga: 15000, tipe: "Makanan"},
    "Ayam Puk Puk":{harga: 13000, tipe: "Makanan"},
    "Ayam Bakar":{harga: 20000, tipe: "Makanan"},
    "Es Teh":{harga: 5000, tipe: "Minuman"},
    "Es Jeruk":{harga: 7000, tipe: "Minuman"}
}

const pesananRehan = [   
    { harga: menu["Ayam Bakar"].harga, jumlah: 2, tipe: menu["Ayam Bakar"].tipe },
    {harga: menu["Es Teh"].harga, jumlah: 1, tipe: menu["Es Teh"].tipe}   
]

const pesananRoni = [   
    { harga: menu["Ayam Puk Puk"].harga, jumlah: 1, tipe: menu["Ayam Puk Puk"].tipe },
    {harga: menu["Es Teh"].harga, jumlah: 3, tipe: menu["Es Teh"].tipe}   
]

const pesananFaiz = [   
    { harga: menu["Ayam Goreng Krispi"].harga, jumlah: 1, tipe: menu["Ayam Goreng Krispi"].tipe },
    { harga: menu["Ayam Puk Puk"].harga, jumlah: 1, tipe: menu["Ayam Puk Puk"].tipe },
    { harga: menu["Ayam Bakar"].harga, jumlah: 1, tipe: menu["Ayam Bakar"].tipe },
    {harga: menu["Es Teh"].harga, jumlah: 1, tipe: menu["Es Teh"].tipe},
    {harga: menu["Es Jeruk"].harga, jumlah: 1, tipe: menu["Es Teh"].tipe}
]

const totalPajak = (harga, jumlah, tipe) => {
    let pajak = 0
    if (tipe === "Makanan") {
        pajak += 0.05
    } else if (tipe === "Minuman") {
        pajak += 0.03
    }

    let pajakPerItem = harga * pajak 
    let subtotal = (harga + pajakPerItem) * jumlah

    return subtotal
}

const semuanya = (pesanan) => {
    let total = 0
    for (let i = 0; i < pesanan.length; i++) {
        let item = pesanan[i]
        total += totalPajak(item.harga, item.jumlah, item.tipe)
    }

    let Semua = total * 1.15

    return Semua
}

console.log("rehan : " + semuanya(pesananRehan).toFixed(0))
console.log("roni : " + semuanya(pesananRoni))
console.log("faiz : " + semuanya(pesananFaiz))
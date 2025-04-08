function hitungDanUrutkanAnak(namaAnak) {
    var count = {};
    for (var i = 0; i < namaAnak.length; i++) {
        var nama = namaAnak[i];
        if (count[nama] === undefined) {
            count[nama] = 1;
        } else {
            count[nama] = count[nama] + 1;
        }
    }
    
    var arr = [];
    for (var key in count) {
        arr.push([key, count[key]]);
    }
    
    // Urutkan dari jumlah terbesar
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j][1] > arr[i][1]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    if (arr[0][1] === 1) {
        return "Semuanya anak baik";
    }

    // Ambil semua anak dengan jumlah tertinggi
    var hasil = [];
    var tertinggi = arr[0][1];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][1] === tertinggi) {
            hasil.push(arr[i][0]);
        }
    }

    return hasil.join(" dan ") + " Nakal";
}


const input1 = ["Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar"];
console.log(hitungDanUrutkanAnak(input1));

// const input2 = ["Bagas", "Dimas", "Fajar", "Bagas", "Indra", "Gilang", "Gilang", "Bagas", "Fajar", "Fajar"];
// console.log(hitungDanUrutkanAnak(input2));

// const input3 = ["Aisyah", "Bagas", "Dewi", "Dimas", "Eka", "Fajar", "Gilang", "Hana", "Indra", "Jihan"];
// console.log(hitungDanUrutkanAnak(input3));
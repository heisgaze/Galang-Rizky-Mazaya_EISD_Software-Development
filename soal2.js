const polindrom = "katak"
const nonPolindrom = "angsa"

const fungsi = (katakan) => {
    const kata = katakan.split("").reverse().join("")
    if (kata === katakan) {
        return console.log("eureeka!")
    } else {
        return console.log("suka blyat!")
    }
}

console.log(fungsi(polindrom))
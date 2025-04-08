const tamu = ["Ningguang","Hutao","Xiao","Childe"]
const kueMasihAda = "Xiao"

let pelaku = null
for (let i = 0; i < tamu.length; i++) {
  if (tamu[i] === kueMasihAda) {
    pelaku = tamu[i + 1]
  }
}

console.log("pelaku adalah : " + pelaku)


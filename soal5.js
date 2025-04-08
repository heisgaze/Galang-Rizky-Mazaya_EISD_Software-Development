const combinations = (nama) => {
  let cleanName = ""
  for (let i = 0; i < nama.length; i++) {
    if (nama[i] !== " ") {
      cleanName += nama[i].toLowerCase()
    }
  }

  let maxLength = 9
  let count = 0

  for (let length = 1; length <= maxLength; length++) {
    for (let i = 0; i <= cleanName.length - length; i++) {
      count++
    }
  }

  return count
}

console.log(combinations("Naip Lovyu"))

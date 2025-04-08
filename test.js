let total = 0

for (let length = 1; length <= 9; length++) {
    for (let i = 0; i <= 9 - length; i++) {
      total += i
    }
  }

  console.log(total)
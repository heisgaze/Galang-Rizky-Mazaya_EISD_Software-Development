function decryptMessage(encryptedText) {
    let decryptedText = "";
    for (let char of encryptedText) {
        if (char >= 'a' && char <= 'z') {
            let newChar = String.fromCharCode(((char.charCodeAt(0) - 97 - 5 + 26) % 26) + 97);
            decryptedText += newChar;
        } else {
            decryptedText += char;
        }
    }
    return decryptedText;
}

const encryptedMessages = [
    "xfqfr bfmdz",
    "gjxtp lzj rfz ifkyfw jxi snm",
    "gwt, gjxtp qz rfz rfpfs in bfwlty lfp?",
    "fpz xfdfsl pfrz, rfz lfp ofin ufhfwpz",
    "dfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu"
];

encryptedMessages.forEach((msg, index) => {
    console.log(`Pesan ${index + 1}:`, decryptMessage(msg));
});

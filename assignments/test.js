let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g,
    str => str.toUpperCase()));
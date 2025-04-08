const links = [];

const res = await fetch("https://gregorova.eu/nazory/?page=1");
const html = await res.text();
console.log(html);

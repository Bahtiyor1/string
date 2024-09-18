let Ism = prompt("Ismingizni kiriting");
let harf = prompt("Bironta harf kiriting");

if (Ism.includes(harf)) {
  console.log(`${Ism} ismining ichida '${harf}' harfi mavjud`);
} else {
  console.log(`${Ism} ismining ichida '${harf}' harfi mavjud emas`);
}

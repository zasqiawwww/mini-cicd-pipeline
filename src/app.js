function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  if (b === 0) {
    throw new Error('Tidak bisa dibagi nol!');
  }
  return a / b;

}
function pangkat(a, b) {
  return Math.pow(a, b);
}

module.exports = { tambah, kurang, kali, bagi, pangkat };
const { tambah, kurang, kali, bagi, pangkat } = require('../src/app');

// Test untuk fungsi tambah
describe('Test Fungsi Kalkulator', () => {
  
  test('Fungsi tambah harus mengembalikan hasil penjumlahan', () => {
    expect(tambah(2, 3)).toBe(5);
    expect(tambah(10, 5)).toBe(15);
    expect(tambah(-1, 1)).toBe(0);
  });

  test('Fungsi kurang harus mengembalikan hasil pengurangan', () => {
    expect(kurang(10, 3)).toBe(7);
    expect(kurang(5, 10)).toBe(-5);
  });

  test('Fungsi kali harus mengembalikan hasil perkalian', () => {
    expect(kali(3, 4)).toBe(12);
    expect(kali(-2, 5)).toBe(-10);
  });

  test('Fungsi bagi harus mengembalikan hasil pembagian', () => {
    expect(bagi(10, 2)).toBe(5);
    expect(bagi(9, 3)).toBe(3);
  });

  test('Fungsi bagi harus error jika dibagi nol', () => {
    expect(() => bagi(10, 0)).toThrow('Tidak bisa dibagi nol!');
  });

  test('Fungsi pangkat harus mengembalikan hasil perpangkatan', () => {
  expect(pangkat(2, 3)).toBe(8);
  expect(pangkat(5, 2)).toBe(25);
  expect(pangkat(10, 0)).toBe(1);
});

});
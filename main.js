//tugas kecil

// 1.
const saldoAwal = prompt("Masukkan saldo awal: ");
const totalTransaksi = prompt("Masukkan total transaksi: ");
const saldoAkhir = saldoAwal - totalTransaksi;
alert(`Saldo akhir: ${saldoAkhir}`);

// 2
let hari = new Date().getDay()
var NamaHari = new Array("Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat",
"Sabtu");
var sekarang = new Date();
var HariIni = NamaHari[sekarang.getDay()];
console.log(`hari ini adalah hari ${HariIni}`)
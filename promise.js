const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  // Buat promise baru
  return new Promise ((resolve, reject) => {
    // Promise akan reject kalau tidak ada data/ data null/ data undefined
    if (emosi === null || emosi === '') {
      reject ('Tidak ada keterangan emosi');
      
      // Hasil resolve bila emosi tidak marah
    } else if (emosi == 'tidak marah') {
      (async () => {
        // Hitung jumlah emosi tidak marah di tiap theater lalu hasilnya dijumlah
        let hitungIIX = hitung(await promiseTheaterIXX(), emosi);
        let hitungVGC = hitung(await promiseTheaterVGC(), emosi);
        resolve(hitungIIX + hitungVGC);
      })();

      // Hasil resolve bila emosi marah
    } else if (emosi == 'marah') {
      (async () => {
        // Hitung jumlah emosi marah di tiap theater lalu hasilnya dijumlah
        let hitungIIX = hitung(await promiseTheaterIXX(), emosi);
        let hitungVGC = hitung(await promiseTheaterVGC(), emosi);
        resolve(hitungIIX + hitungVGC)
      })();
    }
  })
}

// Fungsi hitung jumlah emosi marah dan jumlah emosi tidak marah di tiap theater
const hitung = (theater, emosi) => {
  // Buat variabel kosong
  let jumlah = null;

  if (emosi == 'tidak marah') {
    for (const element of theater) {
      if (element.hasil == 'tidak marah') {
        jumlah++;
      }
    }
  } else if (emosi == 'marah') {
    for (const element of theater) {
      if (element.hasil == 'marah') {
        jumlah++
      }
    }
  }
  return jumlah;
}


module.exports = {
  promiseOutput,
};

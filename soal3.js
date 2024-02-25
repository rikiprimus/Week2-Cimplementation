// Dengan method map
const divideAndSort = (deret) => {
  if(typeof(deret) === 'string') {
    console.log("Hanya boleh angka saja")
    return
  } 
  //Mengubah jadi String
  //Mengubah jadi array dengan 0 sebagai pemisah, lalu menggunakan metode map
  //didalam nya kita gunakan parameter part sebagai isi dari array.
  const arrUrut = deret.toString().split('0').map(part => part.split('').sort().join(''))
  //Lalu lakukan join lagi untuk menggabungkan array 
  hasil = arrUrut.join('')
  console.log(parseInt(hasil))

}

divideAndSort(5956560159466056)

// // Dengan perulangan
// const divideAndSort = (deret) => {
//   if(typeof(deret) === 'string') {
//     console.log("Hanya boleh angka saja")
//     return
//   } 
//   let hasil = ''
//   const arr1 = deret.toString().split('0')
//   for(let i = 0; i < arr1.length; i++){
//     hasil +=  arr1[i].split('').sort().join('')
//   }
//   console.log(parseInt(hasil))
// }

// divideAndSort(5956560159466056)
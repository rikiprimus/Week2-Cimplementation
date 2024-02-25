const PijarFood = (harga, voucher, jarak, pajak) => {
  let diskon = 0
  //Perbandingan promo
  if(voucher === "PIJARFOOD5" && harga >= 50000){
    diskon = Math.min((harga * 0.5), 50000)
  } else if(voucher === "DITRAKTIRPIJAR" && harga >= 25000){
    diskon = Math.min((harga * 0.6), 30000)
  }

  //Untuk mendapatkan biaya antar
  let tarif = 5000
  const tambahanTarif = (jarak - 2)*3000
  tarif += tambahanTarif

  //untuk mendapatkan berapa biaya pajak
  let persen = 0
  if(pajak === true) {
    persen = (harga * 0.05)
  }

  //untuk mendapatkan total 
  let total = ((harga - diskon) + (tarif + persen))

  console.log(`
  Harga       : ${harga}
  Potongan    : ${diskon}
  Biaya antar : ${tarif}
  Pajak       : ${persen}
  SubTotal    : ${total}
  `)
}

PijarFood(75000, "PIJARFOOD5", 5, true)
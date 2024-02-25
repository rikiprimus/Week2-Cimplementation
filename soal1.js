//Deteksi Palindrome
const palindrome = (kata) => {
  jumlah = kata.length - 1
  var isPalindrome = true

  for(let i = 0; i < jumlah; i++){
    if(kata[i] != kata[jumlah]){
      isPalindrome = false
    }
    jumlah--
  }

  if(isPalindrome == true){
    console.log("Ini Palindrome")
  } else{
    console.log("Ini Bukan Palindrome")
  }
}

palindrome("katak")

//Reverse Word
const reverse = (kalimat) => {
  var kata = ""
  let kalimatTerbalik = ""
  
  for(let i = 0; i < kalimat.length; i++){
    if(kalimat[i] != " "){
      kata += kalimat[i]
    } else{
      kalimatTerbalik = kata + " " + kalimatTerbalik
      kata = ""
    }
  }

  kalimatTerbalik = kata + " " + kalimatTerbalik
  console.log(kalimatTerbalik)
}

reverse("Ini Bisakah Di Reverse")
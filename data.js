const nama = "Rafif rafi muzakki widodo" //const untuk membuat variable yang mana nilai nya tidak dapat diubah
let usia = 20//let sama seperti const hanya saja nilai nya dapat berubah
const inifunct = "ini adalah tulisan function"

console.log(nama) //console.log sama seperti print (".....")
console.log(usia)
console.log(`Nama saya ${nama} dan saya berusia ${usia} tahun`) //untuk memenaggil variable memakai ${variable} didalam (``)
//atau
console.log("Nama saya adalah", nama, "dan saya berusia", usia)//memakai koma 

// function generateBio() {                    //untuk membuat fungsi
//     console.log (inifunct)
// }
// generateBio()//untuk memanggil function yang telah kita buat



let showbiodata = document.getElementById("biodata")
console.log(showbiodata)

function perbandinganUsia() {
    let generasi

    if (usia >= 19 & 25 >= usia) { //berarti rentang usia 19 sampai 25
        //console.log("Anda sudah memasuki jenjang remaja kawnandddd")
        generasi = "Generasi : partyyyyy"//return ini mengembalikan kondisi ke awal
    } else if (usia >= 0 & 18 >= usia){ //berarti rentang usia 0 sampai 19
        // console.log("Anda masih kanak kanak kawanddd")
        generasi = "Generasi : bocil anyinggg"
    } else if (usia > 25){
        // console.log("Anda siapa kawandddd")
        generasi = "Generasi : INGAT AKHIRAT YOKK"
    }
    return showbiodata.innerHTML = generasi
}
perbandinganUsia()
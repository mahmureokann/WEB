//nesneler
const ekmek = { name: "buğday ekmeği", price: 15 };
const cay = { name: "çaykur", price: 40 };
const pirinc = { name: "baldo", price: 35 };
const cikolata = { name: "milka", price: 15 };
//sepet tanımlama
const sepet = [];
//ürünleri sepete ekleyen fonksiyon
function AddToCart() {
    sepet.push(ekmek);
    sepet.push(cay);
    sepet.push(pirinc);
}
//sepete ekeleme eylemi
AddToCart();
/*console.log(sepet);*/
//const testName = "Fatih";
//testName = "Sıla";
//console.log(testName);

//{
//var globalVariable = "a";
//    let localVariable = "b";

//}

//console.log(globalVariable);

//sepetteki ürünlerin fiyatlarının toplamı
function getCartTotalPrice() {
    let totalPrice = 0;
    for (var i = 0; i < sepet.length; i++) {
        totalPrice += sepet[i].price;
    }
    console.log("sepetiniz toplam: " + totalPrice + " TL tutarındadır.")
}

getCartTotalPrice();

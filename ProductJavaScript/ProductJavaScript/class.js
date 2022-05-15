class Product {
    constructor(_productId, _productName, _price, _stock) {
        this.ProductId = _productId;
        this.ProductName = _productName;
        this.Price = _price;
        this.Stock = _stock;

    }
}

class ProductList {
    static GetProduct() {  //Product classındaki this.xxx'ler burada kullanılıyor!
        const product = [{ 
            ProductId : 1,
            ProductName : "Çay",
            Price : 15,
            Stock : 500


        }, {
            ProductId :2,
            ProductName : "Çikolata",
            Price : 25,
            Stock : 750
        }, {
            ProductId : 3,
            ProductName : "Şeker",
            Price : 5,
            Stock : 150
            }]
        for (var i = 0; i < product.length; i++) {

            ProductList.AddProduct(product[i]);

        }


    }
    static AddProduct(product) {
        const productTable = document.getElementById("ProductTable"); 
        const tr = document.createElement("tr"); //Product classındaki this.xxx'ler burada kullanılıyor!

        tr.innerHTML = `
                 <td>${product.ProductId}</td>   
                 <td>${product.ProductName}</td>
                 <td>${product.Price}</td>p
                 <td>${product.Stock}</td>
                 
`

        productTable.appendChild(tr);

    }
}

window.onload = function () {
    ProductList.GetProduct();

    document.getElementById("add").onclick = function () {
        const productId = document.getElementById("pId").value; //buradaki constlar değişken kafamıza göre isimlendiriyoruz!
        const productName = document.getElementById("pName").value;
        const price = document.getElementById("pPrice").value;
        const stock = document.getElementById("pStock").value;
        

        const products = new Product(productId, productName, price, stock); //Yukarıdaki kafamıza göre isimlendirdiğimiz değişkenleri buraya yazıyoruz!

        ProductList.AddProduct(products);

        console.log(products);
    }

    

}
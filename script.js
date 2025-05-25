const products = [
  {
    id: 1,
    name: "Plain Cotton T-Shirt (2-Pack, Teal)",
    price: 15.99,
    image: "adults-plain-cotton-tshirt-2-pack-teal.jpg"
  },
  {
    id: 2,
    name: "6-Piece Non-Stick Baking Set",
    price: 29.99,
    image: "6-piece-non-stick-baking-set.webp"
  },
  {
    id: 3,
    name: "Athletic Cotton Socks (6 Pairs)",
    price: 12.99,
    image: "athletic-cotton-socks-6-pairs.jpg"
  },
  {
    id: 4,
    name: "Backpack",
    price: 24.99,
    image: "backpack.jpg"
  },
  {
    id: 5,
    name: "Bathroom Rug",
    price: 18.99,
    image: "bathroom-rug.jpg"
  },
  {
    id: 6,
    name: "Coffeemaker with Glass Carafe (Black)",
    price: 49.99,
    image: "coffeemaker-with-glass-carafe-black.jpg"
  },
  {
    id: 7,
    name: "Countertop Blender (64 oz)",
    price: 39.99,
    image: "countertop-blender-64-oz.jpg"
  },
  {
    id: 8,
    name: "Electric Glass & Steel Hot Water Kettle",
    price: 34.99,
    image: "electric-glass-and-steel-hot-water-kettle.webp"
  }
];


document.addEventListener("DOMContentLoaded", () => {
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);
    let total = JSON.parse(localStorage.getItem("total")) || 0;
    console.log(total);
    let totalcont = document.createElement("p");
    totalcont.textContent = "Total: $ ";
    totalcont.classList.add("totalcont");
    let span = document.createElement("span");
    span.textContent = total;
    let cartcont = document.createElement("div");
    document.body.appendChild(cartcont);
    cartcont.classList.add("cartcont");

    cart.forEach(product => {
                let prod1 = document.createElement("div");
                prod1.classList.add("prod1");
                let img = document.createElement("img");
                img.src = product.image;
                img.classList.add("imgclass");
                let prodname = document.createElement("p");
                prodname.textContent = product.name;
                let prodprice = document.createElement("p");
                prodprice.textContent = "$ " + product.price;
                let quant = document.createElement("span");
                quant.textContent = "Quantity: " + (product.quantity || 1);
                prod1.appendChild(img);
                prod1.appendChild(prodname);
                prod1.appendChild(quant);
                prod1.appendChild(prodprice);
                cartcont.appendChild(prod1);
                totalcont.appendChild(span);
                cartcont.appendChild(totalcont);
                
              })




let addtocart_btns= document.querySelectorAll(".AddtoCart-btn");
addtocart_btns.forEach(button => {
    button.addEventListener("click", () => {
        let parentElement = button.parentElement;
        let name = parentElement.querySelector("p").textContent;
        products.forEach(product => {
            if (name === product.name) {
                let found = false;
                cart.forEach(element =>{
                  if (element.name === name) {
                      if (!element.quantity) {
                          element.quantity = 1;
                      }
                      element.quantity += 1;
                      total += parseFloat(element.price);
                      element.price = 2* parseFloat(element.price);
                      found=true;
                  }
                })

                if (!found) {
                cart.push(product);
                let prod1 = document.createElement("div");
                prod1.classList.add("prod1");
                let img = document.createElement("img");
                img.src = product.image;
                img.classList.add("imgclass");
                let prodname = document.createElement("p");
                prodname.textContent = product.name;
                let prodprice = document.createElement("p");
                prodprice.textContent = "$ " + product.price;
                total += parseFloat(product.price);
                let quantity = 0 ;
                quantity += 1;
                cart.forEach(element =>{
                  if (element.name === name) {
                      element.quantity = quantity;
                  }
                })
                let quant = document.createElement("span");
                quant.textContent = "Quantity: " + quantity;
                prod1.appendChild(img);
                prod1.appendChild(prodname);
                prod1.appendChild(quant);
                prod1.appendChild(prodprice);
                cartcont.appendChild(prod1);
                totalcont.appendChild(span);
                cartcont.appendChild(totalcont);
                  
                }
                
            } 
        })
        span.textContent = total;
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("total",JSON.stringify(total));

    });
});

document.querySelector(".clear-cart").addEventListener("click", () => {
    
    let ans = prompt("Are you sure you want to clear the cart? ") ;
    if (ans === "yes" || ans === "Yes" ) {
      localStorage.removeItem("cart");
      localStorage.removeItem("total");
      location.reload();
    }
    
});


});










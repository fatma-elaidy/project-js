let allMainProducts = [
    {
        id : 1,
        name : "AirBuds",
        category: "electronics",
        imgPath : "images/airbuds.png",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad culpa provident deleniti, voluptatem consequuntur!",
        price : 2000,
        cartQuantity:0
    }
]

// data --> CartProducts
function addToCart (id) {
    let index = allMainProducts.findIndex((item) => item.id === id)
    let product = allMainProducts[index]
    let cartProductCheck = cartProducts.findIndex((item) => item.id === id)
    if (cartProductCheck === -1) {
        cartProducts.push(product)
        product.cartQuantity = 1
        let cardProductQuantityBox = document.querySelector(#cardProductQuantityBox_${product.id});
        let cardProductQuantityValue = document.querySelector(.cardProductQuantityValue_${product.id})
        let addToCartBtn = document.querySelector(.addToCartBtn_${product.id});

        addToCartBtn.style.display = 'none';
        cardProductQuantityValue.innerHTML =  1
        cardProductQuantityBox.style.display = "flex";

    }else {
        product.cartQuantity ++
    }
    cartBadgeNum(product.cartQuantity);
    drawCartItems()  
}


function drawCartItems() {
    cartProductsContainer.innerHTML = ""
    let cartItems = cartProducts.map((product) => {
        return `<div class="cartProduct">
        <img src="${product.imgPath}" alt="">
        <div class="cartProductInfo">
            <h3>${product.name}</h3>
            <div class="cartProductQuantity">
                <span class="btn btn-success" id="cartProductIncrement" onclick="quantityIncrement (${product.id})">+</span>
                <span id="cartProductQuantity">${product.cartQuantity}</span>
                <span class="btn btn-danger" id="cartProductDecrement" onclick="quantityDecrement(${product.id})">-</span>
            </div>
        </div>
    </div> <!-- cartProduct -->`
    })
    cartBadge.style.display = "block"
    cartBadge.innerHTML = cartBadgeValue
    cartProductsContainer.innerHTML += cartItems.join('')
    cartTitle ()
    localStorage.setItem('cart' , JSON.stringify(cartProducts) )
}

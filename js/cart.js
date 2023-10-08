let userData = document.querySelector("#userdata span a")
let deleteData = document.querySelector("#delete-data")
let username = document.querySelector("#name")
let userInfo = document.querySelector("#user-info")
let removeData = document.querySelector("#removeData")
if(localStorage.getItem("username")){
    deleteData.remove()
    userInfo.style.display = "flex"
    userData.innerHTML = localStorage.getItem("username")
}

removeData.addEventListener("click",function(e){
    e.preventDefault()
    localStorage.clear()
    setTimeout(()=>{
        window.location="login.html"
    },1000   )
})
// get data from localstorage
let allTotalPrice = 0
// console.log(productData)
let productsContainer = document.querySelector(".Products-items")
function drawdata(product){
    // console.log(product)
    let d = product.map((item)=>{
        allTotalPrice += (item.price * item.inCart)
        return  `
        <tr>
            <td class="td-style">
                <button class="btn btn-danger btn-style" onClick="removeitem(${item.id})"><i class="fa-solid fa-xmark"></i> </button>
                <img src="../${item.imgurl}" class="img-thumbnail " height="70" width="70">
                <h3 class="text-primary">${item.product}</h3>
            </td>
            <td class="text-center price-tab">${item.price},00 EGP</td>
            <td>
                <div class="quan-sty">
                    <button class="btn btn-success btn-style" onClick="res(${item.id})">+</button>
                    <span class="product-value your-Cart_${item.id}">${item.inCart}</span>
                    <button class="btn btn-danger btn-style" onClick="res2(${item.id})">-</button>
                </div>
                        
                </td>
                <td class="text-center price-tab total-price_${item.id}" id="totalprice">${item.inCart * item.price},00 EGP</td>  
        </tr>
        `
    })
    let y = d.join(" ")
    productsContainer.innerHTML = y
    footerdispaly(allTotalPrice)
}
// draw fav item
let favsection = document.querySelector(".swiper-wrapper")
function drawfav(favitem){
    // console.log(favitem)
    let fav = favitem.map((item)=>{
        return `
        <div class="swiper-slide">
            <!-- JS Code-->
                <div class="card width-sty" >
                    <img src="../${item.imgurl}" alt="" class=" img-thumbnail" >
                    <div class="card-body">
                        <h3>Product <br> <span>${item.product}</span></h3>
                        <h3>Category <br> <span>${item.category}</span></h3>
                    </div>
                    <div class="card-foot">
                        <i class="fa-solid fa-heart icon"></i>
                    </div>
                </div>
        </div>
        `
    })
    let y = fav.join(" ")
    favsection.innerHTML += y
}

let productData = localStorage.getItem("CartProducts")
let favitem = localStorage.getItem("favarr")
favitem = JSON.parse(favitem)
drawfav(favitem)

// console.log (productData.length)
if (productData || favitem ){
    productData=JSON.parse(productData)
    drawdata(productData)
}

function removeitem(id) {
    const productToRemove = productData.find(item => item.id === id);
    if (productToRemove) {
      const totalPriceToRemove = productToRemove.price * productToRemove.inCart;

        const indexToRemove = productData.indexOf(productToRemove);
        if (indexToRemove !== -1) {
            productData.splice(indexToRemove, 1);
        }
        drawdata(productData);
    
        allTotalPrice -= totalPriceToRemove;
    
        localStorage.setItem("CartProducts", JSON.stringify(productData));
    
        footerdispaly(allTotalPrice);
    }
}


function res(id){
    // let priceTab = document.querySelector(".total-price") // Price
    let productitem = productData.find((item)=>item.id === id)
    let productID = productitem.id 
    // console.log (productID)
    let productQuantity = document.querySelector(`.your-Cart_${productitem.id}`)  // Quantity
    let totalPrice = document.querySelector(`.total-price_${productitem.id}`) // Total Price
    // console.log(productitem)
    productitem.inCart =parseInt(productitem.inCart)+1
    // console.log(productitem.inCart)
    // console.log(productitem)
    productQuantity.innerHTML = productitem.inCart // upDate the quantity
    let totalcost =  productitem.inCart * productitem.price
    // console.log (productitem.inCart * productitem.price)
    totalPrice.innerHTML = `$${totalcost},00  `
    // **************  All Products total Price  ******************
    allTotalPrice +=  productitem.price
    // console.log(allTotalPrice) //

    localStorage.setItem("CartProducts", JSON.stringify(productData))
    footerdispaly(allTotalPrice)
}
function res2(id){
    // let priceTab = document.querySelector(".total-price") // Price
    let productitem = productData.find((item)=>item.id === id)
    let productID = productitem.id 
    // console.log (productID)
    let productQuantity = document.querySelector(`.your-Cart_${productitem.id}`)  // Quantity
    let totalPrice = document.querySelector(`.total-price_${productitem.id}`) // Total Price
    // console.log(productitem)
    productitem.inCart =parseInt(productitem.inCart)-1
    // console.log(productitem.inCart)
    // console.log(productitem)
    productQuantity.innerHTML = productitem.inCart // upDate the quantity
    let totalcost =  productitem.inCart * productitem.price
    // console.log (productitem.inCart * productitem.price)
    totalPrice.innerHTML = `$${totalcost},00  `
    // **************  All Products total Price  ******************
    allTotalPrice -=  productitem.price
    // console.log(allTotalPrice) //
    localStorage.setItem("CartProducts", JSON.stringify(productData))

    footerdispaly(allTotalPrice)
}
function footerdispaly(all){
    let display = document.querySelector(".display")
    display.innerHTML = `
            <tr>
                <td colspan="4">Total Cost is : ${all},00 EGP</td>
            </tr>
        `
}
footerdispaly(all)





































/////////////////////////////////////////////////////////////////
// **********************************************************
// total-price_${item.id}  ضيفنا ال class دا علشان نقدر نعدل كل سعر لوحده 
//  <td class="text-center price-tab   ...   total-price_${item.id}   ....      ">$${item.inCart * item.price},00</td>   
// <span class="product-value  ...    your-Cart_${item.id}  ....     ">${item.inCart}</span>
/*
let index = productData.find((item)=>item.id === id)
    console.log(productData[index])
    // productData[index].remove()
    // drawdata(productData)
*/

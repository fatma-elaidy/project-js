let userData = document.querySelector("#userdata span a")
let deleteData = document.querySelector("#delete-data")
let username = document.querySelector("#name")
let userInfo = document.querySelector("#user-info")
let removeData = document.querySelector("#removeData")

if(localStorage.getItem("username")){
    deleteData.remove()
    userInfo.style.display = "flex"
    userData.innerHTML = localStorage.getItem("username")
}else{
    userInfo.style.display="none"
}

removeData.addEventListener("click",function(e){
    e.preventDefault()
    localStorage.clear()

    setTimeout(()=>{
        window.location="Data/signup.html"
    },1000   )
})
// ******************** view products  ***************************
let viewproducts = document.querySelector("#viewProducts")
let data =[
    {
        id:1,
        product : "T-shirt adidas",
        imgurl:"imges/product1.jpg",
        price:120,
        category:"fashion",
        inCart:0,
        infav:0
    },
    {
        id:2,
        product : "earpods",
        imgurl:"imges/product2.jpg",
        price:5500,
        category:"phone accessories",
        inCart:0,
        infav:0
    },
    {
        id:3,
        product : "jacket",
        imgurl:"imges/product3.jpg",
        price:340,
        category:"fashion",
        inCart:0,
        infav:0
    },
    {
        id:4,
        product : "Adidas bottle",
        imgurl:"imges/product4.jpg",
        price:50,
        category:"sport",
        inCart:0,
        infav:0
    },
    {
        id:5,
        product : "Glassess",
        imgurl:"imges/product5.jpg",
        price:15300,
        category:"men accessorles",
        inCart:0,
        infav:0
    },
    {
        id:6,
        product : "cap",
        imgurl:"imges/product6.jpg",
        price:800,
        category:"men accessorles",
        inCart:0,
        infav:0
    },
    {
        id:7,
        product : "Bag addidas",
        imgurl:"imges/product7.jpg",
        price:5500,
        category:"Bags",
        inCart:0,
        infav:0
    },
    {
        id:8,
        product : "Shoes adidas",
        imgurl:"imges/product8.jpg",
        price:2200,
        category:"sport",
        inCart:0,
        infav:0
    },
    {
        id:9,
        product : "Bag",
        imgurl:"imges/page2.jpg",
        price:6500,
        category:"Fashion",
        inCart:0,
        infav:0
    },
    {
        id:10,
        product : "Laptop IdeaPad 5",
        imgurl:"imges/l-1.jpg",
        price:25600,
        category:"Laptops",
        inCart:0,
        infav:0
    },
    {
        id:11,
        product : "HP ProBook",
        imgurl:"imges/l-2.jpg",
        price:27500,
        category:"Laptops",
        inCart:0,
        infav:0
    },
    {
        id:12,
        product : "Summer Cap Hat",
        imgurl:"imges/sp-1.jpg",
        price:50,
        category:"sport",
        inCart:0,
        infav:0
    },
    {
        id:13,
        product : "Boys Casual Shoes",
        imgurl:"imges/sh-1.jpg",
        price:350,
        category:"sport",
        inCart:0,
        infav:0
    },
    {
        id:14,
        product : "Airpods pro 2",
        imgurl:"imges/p-2.jpg",
        price:500,
        category:"Headphones",
        inCart:0,
        infav:0
    },
]
/* Search manage */
let searchbtn = document.querySelector("#searchbtn")
searchbtn.addEventListener("click",()=>{
    let selecttype = document.querySelector("#selecttype").value
    let searchinput = document.querySelector("#searchinput").value.toLowerCase()
    // console.log(selecttype," ", searchinput)
    let filterdata = data.filter((item)=>{
        if(selecttype === "Select By Name"){
            return item.product.toLowerCase().includes(searchinput)
        }
        else if(selecttype === "Select By Catogary"){
            return item.category.toLowerCase().includes(searchinput)
        }
    })
    // console.log(filterdata)
    if (filterdata){
        drawItems(filterdata)
    }
    if (searchinput===""){
        drawItems(data)
    }
})



function drawItems(data){
    let d = data.map((item)=>{
        return `
        <div class="col-lg-4">
                <div class="card item">
                    <img class="card-img-top img-thumbnail" src="${item.imgurl}" alt="Card image" >
                        <div class="card-body">
                            <h4 class="card-title">Product : <span> ${item.product} </span></h4>
                            <p class="card-text" price="80">Price :<span> ${item.price} EGP </span></p>
                            <p class="card-text">Category :<span> ${item.category}</span></p>
                            <a  class="btn btn-primary addtocart" id="check" onClick="addItems(${item.id}) ">Add to Cart</a>
                            <a id="favCheck" class="text-secondary" onClick="addfav(${item.id})"><i class="fa-solid fa-heart fav"></i></a>
                            
                        </div>
                </div>  
            </div>
        `
    })
    let y = d.join(" ")
    viewProducts.innerHTML = y
}
drawItems(data)

let cartProductsarr=[]
let count = document.querySelector("#counter")
let counter = 0 ;

function addItems(id){
    if (localStorage.getItem("username")){
        let index = data.findIndex((item)=>item.id===id)
        // console.log(index)
        let productdata = data[index]
        // console.log(productdata)
        let cartdata = cartProductsarr.findIndex((item)=> item.id === id)

        if (cartdata === -1){
            productdata.inCart = 1
            cartProductsarr.push(productdata)
            counter ++ 
        }
        else{
            productdata.inCart --
            cartProductsarr.splice(cartdata , 1)
            counter --
        }
        // console.log(cartProductsarr)
        // console.log(cartProductsarr.length)
        localStorage.setItem("CartProducts" , JSON.stringify(cartProductsarr))
        count.innerHTML = counter
    }
    else{
        window.location="Data/signup.html"
    }


}

// addfav function 
let favarr=[]
function addfav(id) {
    if (localStorage.getItem("username")){
        let index = data.findIndex((item)=> item.id === id)
        // console.log(favitem)
        let favitem = data[index]
        let ourfav = favarr.findIndex((item)=> item.id === id)
        if (ourfav === -1){
            favitem.infav= 1
            favarr.push(favitem)
        }
        else{
            favitem.infav --
            favarr.splice(ourfav , 1)
        }
        // console.log(favarr)
        localStorage.setItem("favarr",JSON.stringify(favarr))
    

    }
    else{
        window.location="Data/signup.html"
    }
}

/************************* add to cart btn ************************** */
let check = document.querySelectorAll("#check")
check.forEach((item) => {
    item.addEventListener("click", function(){
        if(item.innerHTML== "Add to Cart"){
            item.classList.add("btn-success")
            item.innerHTML="Added"
            item.classList.remove("btn-primary")
        }
        else{
            item.classList.add("btn-primary")
            item.innerHTML= "Add to Cart"
            item.classList.remove("btn-success")
        }
    })
})
let favCheck = document.querySelectorAll("#favCheck")
favCheck.forEach((item)=>{
    item.addEventListener("click",()=>{
        if (item.classList.contains("text-secondary"))
        {
            item.classList.add("text-danger")
            item.classList.remove("text-secondary")
        }
        else if (item.classList.contains("text-danger")){
            item.classList.add("text-secondary")
            item.classList.remove("text-danger")
        }
    })
})

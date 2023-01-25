let menu = document.querySelector("#menubtn");
let navbar= document.querySelector(".navbar");

/*menu.onclick =() =>{
    navbar.classList.toggle('active');
}*/
function changeIcon(){
    let menu = document.querySelector("#menubtn");
    let navbar= document.querySelector(".navbar");
    navbar.classList.toggle('active');

}

let slides = document.querySelectorAll(".slide-container");
let index = 0;

function prev(){
    slides[index].classList.remove('active');
    index = (index-1 + slides.length)%slides.length;
    slides[index].classList.add('active')
}
function next(){
    slides[index].classList.remove('active');
    index = (index +1 )%slides.length;
    slides[index].classList.add('active')
}
var addItemId = 0;



    let images = Array.from(document.getElementsByClassName("featured-image-1"));
    let mainPhoto = document.getElementById("big-image-1");
     function display(event){
        let image = event.target
        mainPhoto.src = image.src
}
    images.forEach(function(image){
    image.addEventListener("click", display)
});


let images1 = Array.from(document.getElementsByClassName("featured-image-2"));
let mainPhoto1 = document.getElementById("big-image-2");
function display1(event){
    let image = event.target
    mainPhoto1.src = image.src
}
images1.forEach(function(image){
image.addEventListener("click", display1)
});

let images2 = Array.from(document.getElementsByClassName("featured-image-3"));
let mainPhoto2 = document.getElementById("big-image-3");
function display2(event){
    let image = event.target
    mainPhoto2.src = image.src
}
images2.forEach(function(image){
image.addEventListener("click", display2)
});

let images3 = Array.from(document.getElementsByClassName("featured-image-4"));
let mainPhoto3 = document.getElementById("big-image-4");
function display3(event){
    let image = event.target
    mainPhoto3.src = image.src
}
images3.forEach(function(image){
image.addEventListener("click", display3)
});


 let carts = document.querySelectorAll('.btn');

    let products = [
        {
            name:'J4 Bred OG',
            tag: 'IMG_20221219_165227',
            price:3500,
            inCart:0 ,

        },
        {
            name:'J1 Universty Blue',
            tag: '2',
            price:3500,
            inCart:0, 

        },
        {
            name:'J4 X Union',
            tag: 'IMG_20221219_165326',
            price:3500,
            inCart:0,

        },
        {
            name:'J4 Black',
            tag: 'j4 black',
            price:3500,
            inCart:0,

        },
        {
            name:'Air Force(White)',
            tag: 'IMG_20221224_005146',
            price:2500,
            inCart:0,

        },
        {
            name:'Air Force(Black)',
            tag: 'black',
            price:2500,
            inCart:0,

        },
        {
            name:'Balmain',
            tag: 'balmain',
            price:25000,
            inCart:0,

        },
        {
            name:'Nocta',
            tag: 'nocta 1',
            price:4200,
            inCart:0,

        },
        {
            name:'Gucci-Rython-Vintage',
            tag: 'Gucci-Rython-Vintage-Logo-Product',
            price:3000,
            inCart:0,

        },
        {
            name:'LV Trainer sneaker',
            tag: 'lv sneaker',
            price:4500,
            inCart:0,

        },
        {
            name:'Jordan 11',
            tag: 'j11 p2',
            price:3500,
            inCart:0,

        },
        {
            name:'Nocta',
            tag: 'nocta 1',
            price:4200,
            inCart:0,

        },
        {
            name:'Balenciaga track',
            tag: 'bt p3',
            price:3500,
            inCart:0,

        },
        {
            name:'Bottega Boots',
            tag: 'b p0',
            price:6000,
            inCart:0,

        },
  
];

    for (let i=0; i < carts.length; i++) {
      carts[i].addEventListener('click', () =>  {
        cartNumbers(products[i]);
        totalCost (products[i]);
      })
    }

    function onloadCartNumbers() {
        let productNumbers = localStorage.getItem('cartNumbers');
        
        if(productNumbers) {
            document.querySelector('.navbar span').textContent =productNumbers;
        }
    }
  
    
    function cartNumbers(product){
      
        let productNumbers = localStorage.getItem('cartNumbers');
        
        productNumbers = parseInt(productNumbers);

        if(productNumbers){
            localStorage.setItem('cartNumbers',productNumbers + 1);
            document.querySelector('.navbar span').textContent= productNumbers + 1; 
        }else{
            localStorage.setItem('cartNumbers',1);
            document.querySelector('.navbar span').textContent= 1;
        }
        setItems(product);
    } 

    function setItems(product){
        let cartItems = localStorage.getItem('productInCart');
        cartItems = JSON.parse(cartItems);

        if(cartItems != null ){
            if(cartItems[product.tag] == undefined){
                cartItems = {
                    ...cartItems,
                    [product.tag]:product
                }
            }
            cartItems[product.tag].inCart += 1;
        }else{
            product.inCart = 1;
            cartItems = {
                [product.tag]: product
            }
        }

        localStorage.setItem("productInCart", JSON.stringify(cartItems));
    }
    

    function totalCost(product){
        // console.log("the product price is", product.price);
        let cartCost = localStorage.getItem('totalCost');
        //console.log("My cartCost is", cartCost);
        
        if (cartCost != null) {
            cartCost = parseInt(cartCost);
            localStorage.setItem("totalCost", cartCost + product.price);
        } else{
            localStorage.setItem("totalCost", product.price);
        }
    }

    function displayCart() {
        let cartItems = localStorage.getItem("productInCart");

        cartItems = JSON.parse(cartItems);
        let productContainer = document.querySelector(".product2");
        let cartCost = localStorage.getItem('totalCost');

        if(cartItems && productContainer) {
            productContainer.innerHTML = '';
            Object.values(cartItems).map(item => {
                productContainer.innerHTML += 

                `
                <div class='product1'>
                        <input type="button" id="dltbtn" value="Dlt">
                        <img src='./${item.tag}.jpg' class="imgincart">
                        <span>${item.name}</span>
                 </div>
                 <div class="price1">ksh,${item.price}</div> 
                 <div class="quantity"> 
                    <span>${item.inCart}</span>
                 </div>
                 <div class="total">
                    ksh,${item.inCart * item.price}
                </div>`
            });
            productContainer.innerHTML += `

            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    ksh,${cartCost}
                </h4>
            `
        }
    }

     
    onloadCartNumbers();
    displayCart();
    
    
    
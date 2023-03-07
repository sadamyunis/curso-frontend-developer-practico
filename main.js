const menuemail = document.querySelector(`.navbar-email`);
const desktopmenu =document.querySelector(`.desktop-menu`);
const burguermenu = document.querySelector(`.menu`);
const mobilemenu =document.querySelector(`.mobile-menu`);
const carritoicon =document.querySelector(`.navbar-shopping-cart`);
const detallesdelproducto =document.querySelector(`.product-detail`);
const cardscontainer = document.querySelector(`.cards-container`);

menuemail.addEventListener(`click`, toggledesktopmenu);

function toggledesktopmenu (params) {desktopmenu.classList.toggle (`inactive`);
if(detallesdelproducto.classList.contains(`inactive`)){} else {detallesdelproducto.classList.add(`inactive`)}
    
};


burguermenu.addEventListener(`click`, mobilemenuu);

function mobilemenuu (){mobilemenu.classList.toggle(`inactive`);
if(detallesdelproducto.classList.contains(`inactive`)){}else{detallesdelproducto.classList.add(`inactive`)}


};


carritoicon.addEventListener(`click`, showdetalles);

function showdetalles (){detallesdelproducto.classList.toggle(`inactive`);

if(mobilemenu.classList.contains(`inactive`)){}

else{mobilemenu.classList.add(`inactive`)};

if(desktopmenu.classList.contains(`inactive`)){}else {desktopmenu.classList.add(`inactive`)}

}

const productlist = [];

productlist.push({name: `bike`, price : `2500`,image :`https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940` })

productlist.push({name: `pantalla`, price : `28000`,image :`https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940` })

productlist.push({name:`perro`, price:`50000`,image:`https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`})

productlist.push({name: `pantaleta`, price : `28000`,image :`https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940` })

productlist.push({name:`carle`,price: `50000` })

for (product of productlist){

    const productcard =document.createElement (`div`);
productcard.classList.add(`product-card`);

const productimg= document.createElement (`img`);
productimg.setAttribute(`src`,product.image);

const productinfo =document.createElement (`div`);
productinfo.classList.add(`product-info`);
 
const productinfodiv =document.createElement (`div`);
 const productprice = document.createElement(`p`);
 productprice.innerText= `$`+ product.price;

 const productname =document.createElement(`p`);
 productname.innerText =product.name ;

 const figure =document.createElement (`figure`);

 const imgcart =document.createElement (`img`);

 figure.appendChild(imgcart);

 productinfodiv.appendChild(productprice);

 productinfodiv.appendChild(productname);
 
 productinfo.appendChild(productinfodiv);
 productinfo.appendChild(figure);

productcard.appendChild(productinfo);
productcard.appendChild(productimg);


cardscontainer.appendChild(productcard);






 }
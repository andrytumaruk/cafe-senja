//toggle class active untuk hamburger menu
const navbarnav=document.querySelector('.navbar-nav');
//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick=()=>{
    navbarnav.classList.toggle('active');
};

//toggle class active untuk shopping cart
const shoppingcart=document.querySelector('.shopping-cart');
//ketika tombol shopping di klik
document.querySelector('#shopping-cart-button').onclick=(e)=>{
    shoppingcart.classList.toggle('active');
    e.preventDefault();
}

//toggle class active untuk search form
const searchform=document.querySelector('.search-form');
const searchbox =document.querySelector('#search-box');
document.querySelector('#search-button').onclick= (e) =>{
    searchform.classList.toggle('active');
    searchbox.focus();
    e.preventDefault();
};

//klik di luar element
const hm=document.querySelector('#hamburger-menu');
const sb=document.querySelector('#search-button');
const sc=document.querySelector('#shopping-cart-button');

document.addEventListener('click',function(e){
    if(!hm.contains(e.target)&& !navbarnav.contains(e.target)){
        navbarnav.classList.remove('active');
    }

    if(!sb.contains(e.target)&& !searchform.contains(e.target)){
        searchform.classList.remove('active');
    }
    if(!sc.contains(e.target)&& !searchform.contains(e.target)){
        shoppingcart.classList.remove('active');
    }
});
 
//modal box
const itemdetailmodal=document.querySelector('#item-detail-modal');
const itemdetailbuttons=document.querySelectorAll('.item-detail-button');

itemdetailbuttons.forEach((btn)=> {
    btn.onclick=(e)=>{
        itemdetailmodal.style.display='flex';
        e.preventDefault();
    };
   
});
//klik tombol close modal
document.querySelector('.modal .close-icon').onclick =(e)=>{
    itemdetailmodal.style.display='none';
    e.preventDefault();
};

//klik di luar modal
window.onclick =(e)=>{
    if(e.target=== itemdetailmodal){
        itemdetailmodal.style.display='none';
        e.preventDefault();
    }
};
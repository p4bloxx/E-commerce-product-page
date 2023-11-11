//Nav menu mobile
const openBtn = document.querySelector('#openbtn')
const closeBtn = document.querySelector('#closebtn')
const btnNav = [openBtn, closeBtn]; 
const nav = document.querySelector('.nav-box[data-type="primary-nav"]')
const mobileSlider = document.querySelector('#main-slider');

btnNav.forEach((btn) => {
  btn.addEventListener('click', () => {
    nav.classList.toggle('nav-open')
    if(nav.classList.contains('nav-open')){
      mobileSlider.style.pointerEvents = 'none'
    } else {
      mobileSlider.style.pointerEvents = 'all'
    }
  })
})

//Add and remove items from cart
const iconCart = document.querySelector('#cart').firstElementChild;
const bubble = document.querySelector('#bubble');
const cartPopup = document.querySelector('#cart-popup')
const emptyMsg = document.querySelector('#empty-message')
const cartItems = document.querySelector('#cart-items')
const removeBtn = document.querySelector('#minus img')
const quantity = document.querySelector('#quantity')
const addBtn = document.querySelector('#plus img')
const total = document.querySelector('#total')
const quantityCart = document.querySelector('#item-quantity-cart')
const addCart = document.querySelector('button[data-type="btn-icon"]')
const deleteIcon = document.querySelector('#delete')

//add and remove item from cart
document.addEventListener('click', (e) => {
  if(e.target === addBtn){
    quantity.innerHTML++;
  } else if (quantity.innerHTML > 0 && e.target === removeBtn){
    quantity.innerHTML --;
  }
  Number(quantity.innerHTML)
  let items = quantity.innerHTML;
  if(items > 0){
    itemToCart(items)
  } else {
    emptyMsg.hidden = false;
    cartItems.hidden = true;
  }

  //toggle cart
  if (e.target === iconCart || e.target === iconCart.firstElementChild){
    e.preventDefault();
    cartPopup.classList.toggle('popup-open')
  }

  //to add item on cart and show the total cost
  function itemToCart(items){
    if (e.target === addCart){
      bubble.innerHTML = items;
      bubble.classList.add('bubble-active')
      emptyMsg.hidden = true;
      cartItems.hidden = false;
      quantityCart.innerHTML = `x ${Number(items)}`
      total.innerHTML = `$${items * 125}`
    }
  }

  //delete item from cart
  if(e.target === deleteIcon){
    bubble.classList.remove('bubble-active');
    emptyMsg.hidden = false;
    cartItems.hidden = true;
    quantity.innerHTML = 0;
  }
})


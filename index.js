const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35,
      picture: "assets/icons/001-beetroot.svg",
      clicked: false
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35,
      picture: "assets/icons/002-carrot.svg",
      clicked: false
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35,
      picture: "assets/icons/003-apple.svg",
      clicked: false
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35,
      picture: "assets/icons/004-apricot.svg",
      clicked: false
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35,
      picture: "assets/icons/005-avocado.svg",
      clicked: false
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35,
      picture: "assets/icons/006-bananas.svg",
      clicked: false
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35,
      picture: "assets/icons/007-bell-pepper.svg",
      clicked: false
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35,
      picture: "assets/icons/008-berry.svg",
      clicked: false
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35,
      picture: "assets/icons/009-blueberry.svg",
      clicked: false
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35,
      picture: "assets/icons/010-eggplant.svg",
      clicked: false
    }
  ],
  cart: []
};

const storeSection = document.querySelector('.store--item-list');
const cartSection = document.querySelector('.cart--item-list');
const totalElement = document.querySelector('.total-number');

const itemsList = state.items

function renderStore() {
  storeSection.innerHTML = ''; 
  state.items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('store--item');

    const itemIcon = document.createElement('div');
    itemIcon.classList.add('store--item-icon');

    const img = document.createElement('img');
    img.src = item.picture;
    img.alt = item.name;

    itemIcon.appendChild(img);

    const itemName = document.createElement('h3');
    itemName.textContent = item.name.charAt(0).toUpperCase() + item.name.slice(1);

    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Cart';
    addButton.setAttribute('data-id', item.id);
    addButton.addEventListener('click', addToCart);

    listItem.appendChild(itemIcon);
    listItem.appendChild(itemName);
    listItem.appendChild(addButton);

    storeSection.appendChild(listItem);
  });
}

function renderCart() {
  cartSection.innerHTML = '';
  let totalPrice = 0;

  state.cart.forEach(cartItem => {
    const cartItemElement = document.createElement('li');
    cartItemElement.classList.add('cart--item');

    const itemIcon = document.createElement('img');
    itemIcon.classList.add('cart--item-icon');
    itemIcon.src = cartItem.picture;
    itemIcon.alt = cartItem.name;

    const itemName = document.createElement('p');
    itemName.textContent = cartItem.name.charAt(0).toUpperCase() + cartItem.name.slice(1);

    const minusButton = document.createElement('button');
    minusButton.classList.add('quantity-btn', 'remove-btn', 'center');
    minusButton.textContent = '-';
    minusButton.setAttribute('data-id', cartItem.id);
    minusButton.addEventListener('click', decreaseQuantity);

    const quantityText = document.createElement('span');
    quantityText.classList.add('quantity-text', 'center');
    quantityText.textContent = cartItem.quantity;

    const plusButton = document.createElement('button');
    plusButton.classList.add('quantity-btn', 'add-btn', 'center');
    plusButton.textContent = '+';
    plusButton.setAttribute('data-id', cartItem.id);
    plusButton.addEventListener('click', increaseQuantity);

    cartItemElement.appendChild(itemIcon);
    cartItemElement.appendChild(itemName);
    cartItemElement.appendChild(minusButton);
    cartItemElement.appendChild(quantityText);
    cartItemElement.appendChild(plusButton);
    cartSection.appendChild(cartItemElement);

    totalPrice += cartItem.price * cartItem.quantity;
  });

  totalElement.textContent = `£${totalPrice.toFixed(2)}`;
}


function addToCart(event) {
  const itemId = event.target.getAttribute('data-id');
  const item = state.items.find(item => item.id === itemId);
  if (item) {
    const cartItem = state.cart.find(cartItem => cartItem.id === itemId);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      state.cart.push({ ...item, quantity: 1 });
    }
    renderCart();
  }
}

function increaseQuantity(event) {
  const itemId = event.target.getAttribute('data-id');
  console.log('Increase itemId:', itemId); // Debugging
  const cartItem = state.cart.find(cartItem => cartItem.id === itemId);
  console.log('Cart item:', cartItem); // Debugging
  if (cartItem) {
    cartItem.quantity++;
    renderCart();
  }
}

function decreaseQuantity(event) {
  const itemId = event.target.getAttribute('data-id');
  console.log('Decrease itemId:', itemId);
  const cartItem = state.cart.find(cartItem => cartItem.id === itemId);
  console.log('Cart item:', cartItem);
  if (cartItem) {
    cartItem.quantity = Math.max(cartItem.quantity - 1, 0);
    if (cartItem.quantity === 0) {
      const index = state.cart.indexOf(cartItem);
      if (index !== -1) state.cart.splice(index, 1);
    }
    renderCart();
  }
}

renderStore();
renderCart();

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

const items = state.items
let cartPrice = 0
let cartItemAmount = 0
const displayItems = document.createElement('ul')
const header = document.querySelector('header')
displayItems.setAttribute('class', 'item-list store--item-list')
displayItems.setAttribute('style', 'list-style-type: none')
header.append(displayItems)

for (let i = 0; i < items.length; i++){
  
  const listItems = document.createElement('li')
  displayItems.append(listItems)
  
  const div = document.createElement('div')
  div.setAttribute('class', 'store--item-icon')
  displayItems.append(div)

  const itemsImage = document.createElement('img')
  itemsImage.src = items[i].picture; 
  div.append(itemsImage)

  const itemButton = document.createElement('button')
  itemButton.innerText = 'Add to cart'
  displayItems.append(itemButton)

  itemButton.addEventListener('click', () => {
    console.log('button clicked')
  })




  
}
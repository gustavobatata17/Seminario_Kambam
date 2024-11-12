const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  { title: "O que é o Kambam?", price: 119, colors: [{ code: "black", img: "./img/air.png" }, { code: "darkblue", img: "./img/air2.png" }] },
  { title: "Air Jordan", price: 149, colors: [{ code: "lightgray", img: "./img/jordan.png" }, { code: "green", img: "./img/jordan2.png" }] },
  { title: "Blazer", price: 109, colors: [{ code: "lightgray", img: "./img/blazer.png" }, { code: "green", img: "./img/blazer2.png" }] },
  { title: "Crater", price: 129, colors: [{ code: "black", img: "./img/crater.png" }, { code: "lightgray", img: "./img/crater2.png" }] },
  { title: "Hippie", price: 99, colors: [{ code: "gray", img: "./img/hippie.png" }, { code: "black", img: "./img/hippie2.png" }] }
];

let chosenProduct = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    chosenProduct = products[index];
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "$" + chosenProduct.price;
    currentProductImg.src = chosenProduct.colors[0].img;

    currentProductColors.forEach((color, idx) => {
      color.style.backgroundColor = chosenProduct.colors[idx]?.code || "transparent";
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((s) => {
      s.style.backgroundColor = "white";
      s.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

document.querySelector(".productButton").addEventListener("click", () => {
  document.querySelector(".payment").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".payment").style.display = "none";
});

function addItem(columnId) {
  const itemText = prompt("Digite o título do item:");
  if (!itemText) return;

  const itemContainer = document.getElementById(columnId).querySelector('.item-container');
  const newItem = document.createElement('div');
  newItem.className = 'item';
  newItem.textContent = itemText;

  itemContainer.appendChild(newItem);

  newItem.addEventListener('click', () => {
    const nextColumn = getNextColumn(columnId);
    if (nextColumn) {
      document.getElementById(nextColumn).querySelector('.item-container').appendChild(newItem);
    }
  });
}

function getNextColumn(currentColumn) {
  return currentColumn === 'todo' ? 'in-progress' : currentColumn === 'in-progress' ? 'done' : null;
}

document.querySelectorAll('.reference-card').forEach(card => {
  card.querySelector('.toggle-info').addEventListener('click', () => {
    const info = card.querySelector('.reference-info');
    info.style.display = info.style.display === 'block' ? 'none' : 'block';
    
    const button = card.querySelector('.toggle-info');
    button.textContent = button.textContent === '+' ? '-' : '+';
  });
});

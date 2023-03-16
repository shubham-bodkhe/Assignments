let Product = JSON.parse(localStorage.getItem("Products"));

let cards = document.querySelector(".cards");

let objes = [];

for (const i of Product) {
  let obj2 = {
    Name: i.Name,
    Desc: i.Desc,
    Price: i.Price,
  };
  objes.push(obj2);
}

// console.log(objes);

const items = objes.map((item, index) => {
  return `
  <div class="card">
    <div class="product-name"><h1>${item.Name}</h1></div>
    <div class="product-description">${item.Desc}
    </div>
    <div class="product-price"><h3>${item.Price}</h3></div>
    </div>
        `;
});

cards.innerHTML = items;

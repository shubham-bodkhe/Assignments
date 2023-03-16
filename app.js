let form = document.querySelector("form");
let pname = document.querySelector("#product-name");
let pdesc = document.querySelector("#product-desc");
let pprice = document.querySelector("#product-price");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let productName = pname.value;
  let productDesc = pdesc.value;
  let productPrice = pprice.value;

  //   localStorage.setItem("PName", productName);

  //   localStorage.setItem("PDesc", productDesc);

  //   localStorage.setItem("PPrice", productPrice);
  let Products = JSON.parse(localStorage.getItem("Products"));

  let singleproduct = {
    Name: productName,
    Desc: productDesc,
    Price: productPrice,
  };
  Products.push(singleproduct);
  localStorage.setItem("Products", JSON.stringify(Products));

  // let obj =JSON.parse(localStorage.getItem('Products'))

  // for (let i = 0; i < Products.length; i++) {
  //   let res = console.log(obj[i].Name, obj[i].Desc);

  // }

  window.location.href = "./cart.html";
});

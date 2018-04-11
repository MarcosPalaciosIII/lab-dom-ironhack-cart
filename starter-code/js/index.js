function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

//var productList = document.querySelectorAll(".product-list");
var price = document.querySelectorAll(".unitCost");
var quantity = document.querySelectorAll(".input");
var sum = document.querySelectorAll(".priceSum");
var totalPrice =  document.querySelector('.totalPrice');

var grandTotal = 0;

function getTotalPrice() {

for (var i= 0; i < price.length; i++) {
  var result = price[i].innerHTML * quantity[i].value;

  sum[i].innerHTML = result;

  grandTotal += Number(sum[i].innerHTML);

  console.log(grandTotal);
  }
  totalPrice.innerHTML = grandTotal;
  grandTotal = 0;
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

const cartArray = [
{name:'Apple',price:4,quantity:2},
{name:'Orange',price:3,quantity:3}
]

let totalPrice = 0; 

function cartTotal(cart){
    cart.forEach(function(elt){
        totalPrice = totalPrice + elt.price*elt.quantity
    });
    console.log(totalPrice)
}

let parentDiv = document.getElementById('receipt')
function displayReceipt(cart){
    cart.forEach(function(elt){
        document.getElementById('receipt').innerHTML = '';
        const div = document.createElement('div');
        div.innerText = `${elt.name } $ ${elt.price*elt.quantity}`
        parentDiv.appendChild(div)
    })
    let cartTotal = 0 
    cartArray.forEach(function (item) {
        cartTotal = cartTotal + item.price * item.quantity;
      });
  
      const totalLine = document.createElement('div');
      totalLine.innerText = 'Cart total = $' + cartTotal;
      receipt.appendChild(totalLine);
}
cartTotal(cartArray)
displayReceipt(cartArray)
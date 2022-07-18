
function addCart(entreeText){
    let div = document.getElementById('cart');
    let div2 = document.createElement('div');
    div2.innerText = entreeText;
    div.appendChild(div2)
}

function clear(){
    document.getElementById('cart').reset();
}
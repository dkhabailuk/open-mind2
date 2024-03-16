let catalogData = [
    {isHit: false, isNew: false},
    {isHit: false, isNew: true},
    {isHit: true, isNew: false},
    {isHit: true, isNew: false},
    {isHit: false, isNew: true},
    {isHit: true, isNew: false},
    {isHit: false, isNew: false},
    {isHit: true, isNew: false},
    {isHit: false, isNew: true},
    {isHit: true, isNew: false},
    {isHit: false, isNew: false},
    {isHit: true, isNew: false},
    {isHit: false, isNew: true},
    {isHit: false, isNew: false},
    {isHit: false, isNew: true},
    {isHit: true, isNew: false}
]
function updateCards(products){
    let elements = document.querySelectorAll(`.link-page`);
    for(let i = 0; i < elements.length; i++){
        let element = elements[i]
        let product = products[i]
        if(product.isHit){
            availabilityClass = "hit"
            element.classList.add(availabilityClass)
        }
        if(product.isNew){
            availabilityClass = "new"
            element.classList.add(availabilityClass)
        }
    }
}
updateCards(catalogData)





let modal = document.querySelector('.modal');
let btn = document.querySelector('.showModal');
let close = document.querySelector('.close');
btn.onclick = function() {
  modal.style.display = 'block';
}
close.onclick = function() {
  modal.style.display = 'none';
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
document.onkeydown = function(event) {
    if (event.key === 'Escape') {
      modal.style.display = 'none';
    }
  }
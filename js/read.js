let photos = [
    '../img/readin guy.jpg',
    '../img/writing guy.jpeg',    
    '../img/cleans sheet.jpg',
    '../img/men in books.webp',
    '../img/book tree.jpeg'
    ]
let thumbnails = document.querySelectorAll(".gallery__photo-preview")
let fullPhoto = document.querySelector(".full-photo")
for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function(){
        console.log(i)
        console.log(photos[i])
        fullPhoto.src = photos[i]
    })
}
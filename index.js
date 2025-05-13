function showImage(ItemGalleryImage){
    let popupImage = document.getElementById("ImagePopup");
    let ImagePopup = document.getElementById('popimg');
    let popupText = document.querySelector('.popup-text');
    console.log(ItemGalleryImage);
    console.log(popupText)
    ImagePopup.src = ItemGalleryImage;
    console.log(ItemGalleryImage);
    if (ItemGalleryImage == 'http://127.0.0.1:5500/img/1.webp') {
        popupText.innerText = 'ford';
        } else if (ItemGalleryImage == 'http://127.0.0.1:5500/img/2.webp'){
            popupText.innerText = 'buggati atlantic';
        } else if (ItemGalleryImage == 'http://127.0.0.1:5500/img/3.webp'){
            popupText.innerText = 'кабрилoет horch';
        } else if (ItemGalleryImage == 'http://127.0.0.1:5500/img/4.webp'){
            popupText.innerText = 'Chevrolet Corvete';
        } else if (ItemGalleryImage == 'http://127.0.0.1:5500/img/5.webp'){
            popupText.innerText = 'cadillac deville';
        } else if (ItemGalleryImage == 'http://127.0.0.1:5500/img/6.webp'){
            popupText.innerText = 'ford thunderbird';
        } else if (ItemGalleryImage == 'http://127.0.0.1:5500/img/7.webp'){
            popupText.innerText = 'Mercedes-benz';
        } else if (ItemGalleryImage == 'http://127.0.0.1:5500/img/8.webp'){
            popupText.innerText = 'кабриолет dalahaye';
        } else if (ItemGalleryImage == 'http://127.0.0.1:5500/img/9.webp'){
            popupText.innerText = 'ferrari 250 gto';
        } else if (ItemGalleryImage == 'http://127.0.0.1:5500/img/10.webp'){
            popupText.innerText = 'jaguar';
        }
    popupImage.style.display = "flex";
}
function closeimg(){
    let popupImage = document.getElementById("ImagePopup")
    popupImage.style.display = "none";
}


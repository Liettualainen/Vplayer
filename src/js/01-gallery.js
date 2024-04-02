import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from "./gallery-items.js";
// Change code below this line

const currentUl = document.getElementsByClassName("gallery")[0];

const CollectionImages = galleryItems.map((galleryItem) =>
    galleryItem =`
        <li class="gallery__item">
        <a class="gallery__link"  href=${galleryItem.original}>
            <img
            class="gallery__image" 
            src=${galleryItem.preview}
            alt=${galleryItem.description} />
        </a>
      </li>`
)
currentUl.innerHTML = CollectionImages.join('');


const lightbox = new SimpleLightbox(`.gallery a`,
    {
        overlayOpacity: 0.9, captionType: "tetx",
        captionsData: "alt", heightRatio: 0.9, widthRatio: 0.9,
        scaleImageToRatio: true, scrollZoom: true,
        captionPosition: 'bottom', captionDelay: 250,
        showCounter: false
    });




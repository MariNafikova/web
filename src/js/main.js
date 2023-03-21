import "../styles/style.scss";
import { drawGalleryItem } from "./item.js";
import items from "../js/items.js";

const galleryRootElement = document.getElementById("gallery");
items.map((item) => galleryRootElement.appendChild(drawGalleryItem(item)));

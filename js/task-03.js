const images = [
    {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
];

const gallery = document.querySelector(".gallery");

gallery.style.display = "flex";
gallery.style.gap = "20px";
gallery.style.listStyle = "none";

const galleryItems = images
    .map(
        ({ url, alt }) =>
            `<li style="flex-basis: calc((100% - 20px) / 3;)"><img class="picture" style="width: 100%;" src=${url} alt='${alt}'></img></li>`
    )
    .join("");

gallery.insertAdjacentHTML("beforeend", galleryItems);

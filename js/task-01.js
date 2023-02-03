const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

const logItems = (el) => {
    let res = [];
    categoriesItems.forEach((item) => {
        const sep = "\n";
        let arr = [];
        const itemCategories = item.firstElementChild.textContent;
        const itemCount = item.lastElementChild.children.length;
        arr.push(
            `Category: ${itemCategories}`,
            `Elements: ${itemCount}`,
            `${sep}`
        );
        res.push(arr.join("\n"));
    });
    return res.join("");
};

console.log(
    `Number of categories: ${logItems.length}${"\n\n"}${logItems()}`.trim()
);

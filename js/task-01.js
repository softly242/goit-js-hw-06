// ul c id categories
const categories = document.querySelector("#categories");
// все li в categories
const items = categories.children;

console.log(`Number of categories: ${items.length}`);
console.log("");

[...items].forEach((item) => {
  const heading = item.firstElementChild.textContent;
  console.log(`Category: ${heading}`);
  console.log(`Elements: ${item.lastElementChild.childElementCount}`);
  console.log("");
});

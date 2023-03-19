// ul c id categories
const categories = document.querySelector("#categories");

// все li в categories
const items = categories.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);
console.log("");

items.forEach((item) => {
  const heading = item.querySelector("h2").textContent;
  console.log(`Category: ${heading}`);
  const elements = item.querySelectorAll("li");
  console.log(`Elements: ${elements.length}`);
  console.log("");
});

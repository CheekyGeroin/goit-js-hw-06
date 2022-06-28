const countItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${countItem.length}`);

countItem.forEach((element) => {
  return console.log(
    `Category: ${element.querySelector("h2").textContent}. Elements: ${
      element.querySelectorAll("li").length
    }.`
  );
});

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");
console.log(ingredientsRef);

function newMarkUp(options) {
  return options.map((element) => {
    console.log(element);
    const item = document.createElement("li");
    item.textContent = element;
    item.style.color = "tomato";
    item.style.fontSize = "20px";

    return item;
  });
}

const createMarkUp = newMarkUp(ingredients);
ingredientsRef.append(...createMarkUp);

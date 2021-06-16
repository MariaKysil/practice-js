// // Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него
//   элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categoriesRef = document.querySelector("#categories");
console.log(categoriesRef.children.length);

const categoriesAmount = categoriesRef.children.length;
console.log(`Quantity ${categoriesAmount}`);

const itemRef = document.querySelectorAll(".item");
console.log(itemRef);

const itemArray = itemRef.forEach((e) => {
  console.log(`Category ${e.firstElementChild.textContent}`),
    console.log(`Quantity ${e.lastElementChild.children.length}`);
});

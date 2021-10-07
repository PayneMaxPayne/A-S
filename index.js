const list = document.getElementById("list");
const input = document.querySelector("#input");
const button = document.getElementById("button");

// input.addEventListener("change", function(ev) {
//     const name = ev.target
//     console.log(ev.target);
// })

button.addEventListener("click", function (ev) {
  const name = input.value;
  console.log(name);
});
// list.addEventListener("click", function(ev) {
//     ev.currentTarget
//     console.log(ev.currentTarget);
// })

console.log();

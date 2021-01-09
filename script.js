/* prints "hi" in the browser's dev tools console */
console.log("hi");

function display_update() {
  let x = document.lastModified;
  document.write("Last Updated: ", x);
}

display_update();

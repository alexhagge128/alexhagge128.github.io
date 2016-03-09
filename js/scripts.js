//create function which stores number list in an array
var pingPong = function(number) {
  var listArray = [];
  for (var i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      listArray.push("pingpong");
    } else if (i % 3 === 0) {
      listArray.push("ping");
    } else if (i % 5 === 0) {
      listArray.push("pong");
    } else {
      listArray.push(i);
    }
  };
  return listArray;
}

//function that will turn array elements into HTML elements
function writeList(pongOutput){
    var items = document.getElementById("pongList");
      items.innerHTML = "";
    for (var i = 0; i < pongOutput.length; i++ ) {
        var item = document.createElement("li");
        item.innerHTML = pongOutput[i];
        items.appendChild(item);
    };
    return;
};

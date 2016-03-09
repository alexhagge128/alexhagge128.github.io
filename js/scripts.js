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

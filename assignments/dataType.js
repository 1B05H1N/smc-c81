function returnDataType(i) {
    return typeof(i);
}

var k = [0];
var j = function (i){};
var x;

console.log(returnDataType(k));
console.log(returnDataType(true));
console.log(returnDataType(j));
console.log(returnDataType(0));
console.log(returnDataType("str"));
console.log(returnDataType(x));
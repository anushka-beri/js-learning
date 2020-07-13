const fruitsArray = ['Apple', 'Cherries', 'Banana', 'Cranberry', 'Kiwi'];
function mapForEach(arr, fn) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    newArray.push(
      fn(arr[i])
    );
  }
  return newArray;
}
const lenArray = mapForEach(fruitsArray, function(item) {
  return item.length;
});
// prints [ 5, 8, 6, 9, 4 ]
console.log(lenArray);
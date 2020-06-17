
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  newObj = Object.assign({}, object, {[key]: value})
  return newObj
}

console.log(updateObjectWithKeyAndValue(recipes, 'pie', 'apple'))


// function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
// }

// function deleteFromObjectByKey(object, key) {
  
// }

// function destructivelyDeleteFromObjectByKey(object, key) {
  
// }


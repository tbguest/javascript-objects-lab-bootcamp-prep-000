
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  newObj = Object.assign({}, object, {[key]: value})
  return newObj
}

// console.log(updateObjectWithKeyAndValue(recipes, 'pie', 'apple'))
// console.log(recipes)


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

// console.log(destructivelyUpdateObjectWithKeyAndValue(recipes, 'pie', 'apple'))
// console.log(recipes)

// function deleteFromObjectByKey(object, key) {
  
// }

function destructivelyDeleteFromObjectByKey(object, key) {
  
}


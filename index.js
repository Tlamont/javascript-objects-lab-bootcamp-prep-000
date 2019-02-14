var recipes = {}

function updateObjectWithKeyAndValue(obj,key,val){
  var newObj = Object.assign({},obj,{[key]:val})
  return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(obj,key,val){
  obj[key] = val
  return obj
}
function destructivelyDeleteFromObjectByKey(obj,key) {
  delete obj[key]
  return obj
}
function deleteFromObjectsByKey(obj,key){
  var newObj = Object.assign({}, obj)
  newObj;
  delete newObj.key
  return newObj
}
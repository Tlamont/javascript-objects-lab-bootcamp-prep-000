var recipes = {}

function updateObjectWithKeyAndValue(obj,key,val){
  var newObj = Object.assign({},obj)
  return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(obj,key,val){
  obj[key] = val
  return obj
}
function destructivelyDeleteFromObjectByKey(obj,key) {
  
}
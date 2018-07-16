// Code your solution here:
function driversWithRevenueOver(array, value) {
  return array.filter(x => x.revenue >= value)
}

function driverNamesWithRevenueOver(array, value) {
  return array.filter( x => x.revenue >= value).map (x => x.name);
}

function exactMatch(array, value) {
  return array.filter(function(element) {
    keys = Object.keys(value);
    for(const key of keys) {
      if(element[key] === value[key]) {
        return element
      }
    }
  })
}

function exactMatchToList(array, value) {
  return array.filter(function(element) {
    keys = Object.keys(value);
    for(const key of keys) {
      if(element[key] === value[key]) {
        return element
      }
    }
  }).map(x => x.name)
}

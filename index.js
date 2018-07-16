function driversWithRevenueOver(collection, revenue) {
  return collection.filter(function (element) { return element.revenue > revenue });
}

function driverNamesWithRevenueOver(collection, revenue) {
  return driversWithRevenueOver(collection, revenue).map(function (element) { return element.name });
}

function exactMatch(collection, attr_obj) {
  const key = Object.keys(attr_obj);
  return collection.filter(function (element) { return element[key] === attr_obj[key] });
}

function exactMatchToList(collection, attr_obj) {
  const key = Object.keys(attr_obj);
  return exactMatch(collection, attr_obj).map(function (element) { return element.name });
}

// Code your solution here:
function driversWithRevenueOver(arr, revenue) {
  newArr = arr.filter(function (driver) {
    return driver.revenue > revenue
  });
  return newArr
};

function driverNamesWithRevenueOver(arr, revenue) {
  let newArr = driversWithRevenueOver(arr, revenue)
  return newArr.map(function (driver){return driver.name});
};

function exactMatch(arr, obj){
  const key = Object.keys(obj)
  newArr = arr.filter(function (driver){return driver[key] === obj[key]; });
  return newArr
};

function exactMatchToList(arr, obj) {
  let newArr = exactMatch(arr, obj)
  return newArr.map(function (driver){ return driver.name })
};

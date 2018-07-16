
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver){
    //console.log(driver.revenue, revenue)
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
    //console.log(driver.name)
      return driver.name;
    });
}

function exactMatch(drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;
    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }
    return matches;
  });
}

function exactMatchToList (drivers, matcher) {
  return exactMatch(drivers, matcher).map(function (driver) {
    //console.log(driver.name)
      return driver.name;
    });
}
